import { useState } from 'react';
import Background from './components/Background';
import LandingPage from './components/LandingPage';
import QuestionFlow from './components/QuestionFlow';
import Results from './components/Results';
import AudioController from './components/AudioController';

export default function App() {
  const [stage, setStage] = useState('landing');
  const [responses, setResponses] = useState({});

  const handleStart = () => {
    setStage('questions');
  };

  const handleComplete = (finalResponses) => {
    setResponses(finalResponses);
    setStage('results');
  };

  return (
    <div className="app">
      <Background />
      <AudioController />

      {stage === 'landing' && <LandingPage onStart={handleStart} />}
      {stage === 'questions' && <QuestionFlow onComplete={handleComplete} />}
      {stage === 'results' && <Results responses={responses} />}
    </div>
  );
}
