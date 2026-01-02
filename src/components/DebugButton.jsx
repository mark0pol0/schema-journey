import { motion } from 'framer-motion';
import { questions } from '../data/questions';

export default function DebugButton({ onDebugFill }) {
  const handleDebugClick = () => {
    // Generate random responses for all questions (1-6 scale)
    const randomResponses = {};
    questions.forEach(question => {
      randomResponses[question.id] = Math.floor(Math.random() * 6) + 1;
    });

    onDebugFill(randomResponses);
  };

  return (
    <motion.button
      onClick={handleDebugClick}
      initial={{ opacity: 0.3 }}
      whileHover={{ opacity: 1, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        zIndex: 999,
        transition: 'all 0.3s ease'
      }}
      title="Debug: Fill random answers"
    >
      🎲
    </motion.button>
  );
}
