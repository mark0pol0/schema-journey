import { useState } from 'react';
import { questions } from '../data/questions';

export default function DebugButton({ onDebugFill }) {
  const handleDebugClick = () => {
    const randomResponses = {};
    questions.forEach(question => {
      randomResponses[question.id] = Math.floor(Math.random() * 6) + 1;
    });

    onDebugFill(randomResponses);
  };

  return (
    <button
      className="utility-button debug-button"
      onClick={handleDebugClick}
      title="Debug: Fill random answers"
    >
      Debug
    </button>
  );
}
