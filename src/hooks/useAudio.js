import { useEffect, useRef, useState } from 'react';

export function useAudio() {
  const audioContextRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const playTone = (frequency, duration = 0.2, type = 'sine') => {
    if (!audioContextRef.current) return;

    const context = audioContextRef.current;
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    gainNode.gain.setValueAtTime(0.1, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + duration);

    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + duration);
  };

  const playClickSound = () => {
    playTone(800, 0.1);
  };

  const playTransitionSound = () => {
    playTone(400, 0.3, 'sine');
    setTimeout(() => playTone(600, 0.2, 'sine'), 100);
  };

  const playCompletionSound = () => {
    playTone(523.25, 0.3); // C
    setTimeout(() => playTone(659.25, 0.3), 200); // E
    setTimeout(() => playTone(783.99, 0.5), 400); // G
  };

  const createAmbientTone = () => {
    if (!audioContextRef.current || isPlaying) return;

    const context = audioContextRef.current;
    const oscillator1 = context.createOscillator();
    const oscillator2 = context.createOscillator();
    const gainNode = context.createGain();

    oscillator1.connect(gainNode);
    oscillator2.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator1.frequency.value = 220;
    oscillator2.frequency.value = 220.5;
    oscillator1.type = 'sine';
    oscillator2.type = 'sine';

    gainNode.gain.value = 0.03;

    oscillator1.start();
    oscillator2.start();

    setIsPlaying(true);

    return () => {
      oscillator1.stop();
      oscillator2.stop();
      setIsPlaying(false);
    };
  };

  return {
    playClickSound,
    playTransitionSound,
    playCompletionSound,
    createAmbientTone,
    isPlaying
  };
}
