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
      setError(`Failed to generate guide: ${err.message}`);
      console.error('Full error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="schema-guide">
      <h2 className="schema-guide-title">Clinical Summary</h2>

      <p className="schema-guide-description">
        Generate a written summary of your three highest-scoring schemas, including
        how they may interact and evidence-based intervention approaches.
      </p>

      {!guide && !isGenerating && (
        <button
          className="start-button"
          onClick={handleGenerateGuide}
        >
          Generate Summary
        </button>
      )}

      {isGenerating && (
        <div className="schema-guide-loading">
          <div className="schema-guide-spinner" />
          <p>Generating summary...</p>
        </div>
      )}

      {error && (
        <div className="schema-guide-error">
          {error}
        </div>
      )}

      {guide && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="schema-guide-content"
        >
          <ReactMarkdown>{guide}</ReactMarkdown>
        </motion.div>
      )}
    </div>
  );
}
