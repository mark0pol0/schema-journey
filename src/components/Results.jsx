import { motion } from 'framer-motion';
import { schemas, questions } from '../data/questions';

export default function Results({ responses }) {
  const calculateSchemaScores = () => {
    const scores = {};

    Object.keys(schemas).forEach(schemaKey => {
      const schemaQuestions = questions.filter(q => q.schema === schemaKey);
      const totalScore = schemaQuestions.reduce((sum, q) => {
        return sum + (responses[q.id] || 0);
      }, 0);
      const maxScore = schemaQuestions.length * 6;
      const percentage = (totalScore / maxScore) * 100;

      scores[schemaKey] = {
        total: totalScore,
        percentage: percentage,
        questionCount: schemaQuestions.length
      };
    });

    return scores;
  };

  const scores = calculateSchemaScores();
  const sortedSchemas = Object.entries(scores)
    .sort((a, b) => b[1].percentage - a[1].percentage)
    .slice(0, 10);

  return (
    <div className="results-page">
      <motion.div
        className="results-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="results-title">Your Inner Landscape</h1>

        <motion.p
          style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.2rem',
            textAlign: 'center',
            marginBottom: '3rem',
            lineHeight: '1.8'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          These are the patterns that shape your emotional world.
          Understanding them is the first step toward growth and healing.
        </motion.p>

        {sortedSchemas.map(([schemaKey, score], index) => {
          const schema = schemas[schemaKey];
          return (
            <motion.div
              key={schemaKey}
              className="schema-result"
              style={{ borderLeftColor: schema.color }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <h3>{schema.name}</h3>
              <p>{schema.description}</p>

              <div className="schema-score">
                <div className="score-bar">
                  <motion.div
                    className="score-fill"
                    style={{ backgroundColor: schema.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${score.percentage}%` }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                  />
                </div>
                <span style={{ color: 'white', minWidth: '50px', textAlign: 'right' }}>
                  {Math.round(score.percentage)}%
                </span>
              </div>
            </motion.div>
          );
        })}

        <motion.div
          style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            textAlign: 'center'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Remember: These patterns were developed as ways to protect yourself.
            They made sense at one time. Now, with awareness, you can choose new paths.
          </p>
        </motion.div>

        <motion.button
          className="start-button"
          onClick={() => window.location.reload()}
          style={{ marginTop: '2rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          Start New Journey
        </motion.button>
      </motion.div>
    </div>
  );
}
