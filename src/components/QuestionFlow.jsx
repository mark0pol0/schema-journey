import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions, ratingScale } from '../data/questions';
import { useAudio } from '../hooks/useAudio';

export default function QuestionFlow({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [selectedRating, setSelectedRating] = useState(null);
  const [direction, setDirection] = useState(1);
  const { playClickSound, playTransitionSound, playCompletionSound } = useAudio();

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  useEffect(() => {
    setSelectedRating(responses[currentQuestion.id] || null);
  }, [currentIndex, currentQuestion.id, responses]);

  const handleRatingSelect = (value) => {
    playClickSound();
    setSelectedRating(value);
    setResponses(prev => ({ ...prev, [currentQuestion.id]: value }));

    // Auto-advance after a short delay
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        playTransitionSound();
        handleNext();
      } else {
        playCompletionSound();
        onComplete({ ...responses, [currentQuestion.id]: value });
      }
    }, 500);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="question-flow">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="question-card"
        >
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="question-number">
            Question {currentIndex + 1} of {questions.length}
          </div>

          <h2 className="question-text">
            {currentQuestion.text}
          </h2>

          <div className="rating-options">
            {ratingScale.map((option) => (
              <motion.button
                key={option.value}
                className={`rating-option ${selectedRating === option.value ? 'selected' : ''}`}
                onClick={() => handleRatingSelect(option.value)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: option.value * 0.05 }}
              >
                <span style={{ marginRight: '1rem', opacity: 0.7 }}>{option.value}</span>
                {option.label}
              </motion.button>
            ))}
          </div>

          <div className="navigation-buttons">
            <button
              className="nav-button"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              Previous
            </button>
            <button
              className="nav-button primary"
              onClick={handleNext}
              disabled={!selectedRating}
            >
              {currentIndex === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
