import { useState } from 'react';
import { motion } from 'framer-motion';
import { generateSchemaGuide } from '../utils/gemini';
import ReactMarkdown from 'react-markdown';

export default function SchemaGuide({ topThreeSchemas }) {
  const [guide, setGuide] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateGuide = async () => {
    setIsGenerating(true);
    setError(null);

    try {
      const generatedGuide = await generateSchemaGuide(topThreeSchemas);
      setGuide(generatedGuide);
    } catch (err) {
      setError(`Failed to generate your schema guide: ${err.message}. Check the console for details.`);
      console.error('Full error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <motion.div
      style={{
        marginTop: '3rem',
        padding: '3rem',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h2 style={{
        fontFamily: 'Crimson Pro, serif',
        fontSize: '2.5rem',
        color: 'white',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        Your Personal Schema Guide
      </h2>

      <p style={{
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: '1.1rem',
        textAlign: 'center',
        marginBottom: '2rem',
        lineHeight: '1.6'
      }}>
        Receive a personalized therapeutic guide based on your top three schemas.
        Discover how they interact and learn specific strategies for healing.
      </p>

      {!guide && !isGenerating && (
        <motion.button
          className="start-button"
          onClick={handleGenerateGuide}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ margin: '0 auto', display: 'block' }}
        >
          Generate My Schema Guide
        </motion.button>
      )}

      {isGenerating && (
        <motion.div
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: '1.2rem',
            padding: '2rem'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div style={{
            display: 'inline-block',
            width: '40px',
            height: '40px',
            border: '4px solid rgba(255, 255, 255, 0.3)',
            borderTopColor: 'white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginBottom: '1rem'
          }} />
          <p>Generating your personalized guide...</p>
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </motion.div>
      )}

      {error && (
        <motion.div
          style={{
            padding: '1.5rem',
            background: 'rgba(255, 100, 100, 0.2)',
            borderRadius: '10px',
            color: 'white',
            textAlign: 'center'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.div>
      )}

      {guide && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            color: 'white',
            lineHeight: '1.8'
          }}
          className="schema-guide-content"
        >
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h1 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'Crimson Pro, serif' }} {...props} />,
              h2: ({node, ...props}) => <h2 style={{ fontSize: '1.6rem', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Crimson Pro, serif' }} {...props} />,
              h3: ({node, ...props}) => <h3 style={{ fontSize: '1.3rem', marginTop: '1.5rem', marginBottom: '0.8rem' }} {...props} />,
              p: ({node, ...props}) => <p style={{ marginBottom: '1rem', fontSize: '1.05rem' }} {...props} />,
              ul: ({node, ...props}) => <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }} {...props} />,
              ol: ({node, ...props}) => <ol style={{ marginLeft: '1.5rem', marginBottom: '1rem' }} {...props} />,
              li: ({node, ...props}) => <li style={{ marginBottom: '0.5rem' }} {...props} />,
              strong: ({node, ...props}) => <strong style={{ color: '#ffd700' }} {...props} />,
            }}
          >
            {guide}
          </ReactMarkdown>
        </motion.div>
      )}
    </motion.div>
  );
}
