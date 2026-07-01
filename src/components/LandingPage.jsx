import { motion } from 'framer-motion';

export default function LandingPage({ onStart }) {
  return (
    <div className="landing-page">
      <motion.div
        className="landing-content"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <p className="landing-eyebrow">Young Schema Questionnaire</p>

        <h1 className="landing-title">Schema Assessment</h1>

        <p className="landing-subtitle">
          A standardized self-report measure of 18 early maladaptive schemas.
        </p>

        <div className="landing-meta">
          <span className="meta-badge">118 items</span>
          <span className="meta-badge">6-point scale</span>
          <span className="meta-badge">~20 min</span>
        </div>

        <p className="landing-description">
          Rate each statement based on how well it describes you generally,
          not just in the present moment. There are no correct answers.
          Respond honestly based on your typical feelings and experiences.
        </p>

        <button type="button" className="start-button start-button-full" onClick={onStart}>
          Begin Assessment
        </button>
      </motion.div>
    </div>
  );
}
