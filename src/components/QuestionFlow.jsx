import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions, ratingScale } from '../data/questions';

export default function QuestionFlow({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [selectedRating, setSelectedRating] = useState(null);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  useEffect(() => {
    setSelectedRating(responses[currentQuestion.id] || null);
  }, [currentIndex, currentQuestion.id, responses]);

  const handleRatingSelect = (value) => {
    setSelectedRating(value);
    setResponses(prev => ({ ...prev, [currentQuestion.id]: value }));

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        onComplete({ ...responses, [currentQuestion.id]: value });
      }
    }, 300);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="question-flow">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="question-card"
        >
          <div className="progress-header">
            <span className="progress-label">Progress</span>
            <span className="progress-percent">{Math.round(progress)}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="question-number">
            Item {currentIndex + 1} of {questions.length}
          </div>

          <h2 className="question-text">
            {currentQuestion.text}
          </h2>

          <p className="rating-scale-label">Response</p>
          <div className="rating-options">
            {ratingScale.map((option) => (
              <button
                key={option.value}
                className={`rating-option ${selectedRating === option.value ? 'selected' : ''}`}
                onClick={() => handleRatingSelect(option.value)}
              >
                <span className="rating-value">{option.value}</span>
                {option.label}
              </button>
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
              {currentIndex === questions.length - 1 ? 'Complete' : 'Next'}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
