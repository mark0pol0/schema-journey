import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAudio } from '../hooks/useAudio';

export default function AudioController() {
  const [isMuted, setIsMuted] = useState(false);
  const { createAmbientTone, isPlaying } = useAudio();

  useEffect(() => {
    let cleanup;
    if (!isMuted) {
      cleanup = createAmbientTone();
    }
    return () => {
      if (cleanup) cleanup();
    };
  }, [isMuted]);

  return (
    <motion.button
      className="audio-toggle"
      onClick={() => setIsMuted(!isMuted)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        zIndex: 1000
      }}
    >
      {isMuted ? '🔇' : '🔊'}
    </motion.button>
  );
}
