import { motion } from 'framer-motion';
import { schemas, questions } from '../data/questions';
import SchemaGuide from './SchemaGuide';

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

  const topThreeSchemas = sortedSchemas.slice(0, 3).map(([schemaKey]) => ({
    name: schemas[schemaKey].name,
    description: schemas[schemaKey].description,
    color: schemas[schemaKey].color
  }));

  return (
    <div className="results-page">
      <motion.div
        className="results-content"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <p className="results-eyebrow">Assessment Complete</p>
        <h1 className="results-title">Schema Profile</h1>

        <p className="results-intro">
          Scores below represent the relative strength of each schema based on your responses.
          Higher percentages indicate stronger endorsement. These results are for informational
          purposes and do not constitute a clinical diagnosis.
        </p>

        <p className="results-section-label">Top Schemas (by score)</p>

        {sortedSchemas.map(([schemaKey, score], index) => {
          const schema = schemas[schemaKey];
          return (
            <motion.div
              key={schemaKey}
              className="schema-result"
              style={{ borderLeftColor: schema.color }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
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
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
                  />
                </div>
                <span className="score-value">
                  {Math.round(score.percentage)}%
                </span>
              </div>
            </motion.div>
          );
        })}

        <div className="results-disclaimer">
          <p>
            Schema scores reflect self-reported patterns and should be interpreted with a
            qualified mental health professional. Elevated scores indicate areas for further
            exploration, not pathology.
          </p>
        </div>

        <SchemaGuide topThreeSchemas={topThreeSchemas} />

        <div className="results-actions">
          <button
            className="start-button secondary"
            onClick={() => window.location.reload()}
          >
            Retake Assessment
          </button>
        </div>
      </motion.div>
    </div>
  );
}
