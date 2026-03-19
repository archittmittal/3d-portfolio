import { useCallback, useRef } from "react";

export const useSounds = () => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const pressBufferRef = useRef<AudioBuffer | null>(null);
  const releaseBufferRef = useRef<AudioBuffer | null>(null);
  const loadedRef = useRef(false);

  const initAudio = useCallback(async () => {
    if (loadedRef.current) return;
    loadedRef.current = true;
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;

      const ctx = new AudioContextClass();
      audioContextRef.current = ctx;

      const [pressRes, releaseRes] = await Promise.all([
        fetch('/assets/keycap-sounds/press.mp3'),
        fetch('/assets/keycap-sounds/release.mp3'),
      ]);

      const [pressBuffer, releaseBuffer] = await Promise.all([
        pressRes.arrayBuffer().then((buf) => ctx.decodeAudioData(buf)),
        releaseRes.arrayBuffer().then((buf) => ctx.decodeAudioData(buf)),
      ]);

      pressBufferRef.current = pressBuffer;
      releaseBufferRef.current = releaseBuffer;
    } catch (error) {
      console.error("Failed to load keycap sound", error);
      loadedRef.current = false;
    }
  }, []);

  const getContext = useCallback(async () => {
    // Lazily initialize on first user interaction
    if (!audioContextRef.current) {
      await initAudio();
    }
    if (audioContextRef.current?.state === 'suspended') {
      await audioContextRef.current.resume();
    }
    return audioContextRef.current;
  }, [initAudio]);

  const playTone = useCallback(async (startFreq: number, endFreq: number, duration: number, vol: number) => {
    try {
      const ctx = await getContext();
      if (!ctx) return;
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = "sine";
      const startTime = ctx.currentTime;

      oscillator.frequency.setValueAtTime(startFreq, startTime);
      oscillator.frequency.exponentialRampToValueAtTime(endFreq, startTime + duration);

      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(vol, startTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start(startTime);
      oscillator.stop(startTime + duration);
    } catch (error) {
      console.error("Failed to play notification sound", error);
    }
  }, [getContext]);

  const playSoundBuffer = useCallback(async (buffer: AudioBuffer | null, baseDetune = 0) => {
    try {
      const ctx = await getContext();
      if (!ctx || !buffer) return;

      const source = ctx.createBufferSource();
      source.buffer = buffer;

      // Add slight variation
      source.detune.value = baseDetune + (Math.random() * 200) - 100;

      const gainNode = ctx.createGain();
      gainNode.gain.value = 0.4;

      source.connect(gainNode);
      gainNode.connect(ctx.destination);

      source.start(0);
    } catch (err) {
      console.error(err);
    }
  }, [getContext]);

  const playPressSound = useCallback(() => {
    playSoundBuffer(pressBufferRef.current);
  }, [playSoundBuffer]);

  const playReleaseSound = useCallback(() => {
    playSoundBuffer(releaseBufferRef.current);
  }, [playSoundBuffer]);

  // Send: Clear, slightly higher pitch, quick
  const playSendSound = useCallback(() => {
    playTone(600, 300, 0.25, 0.08);
  }, [playTone]);

  // Receive: Lower pitch, bubble-like, slightly longer
  const playReceiveSound = useCallback(() => {
    playTone(800, 400, 0.35, 0.1);
  }, [playTone]);

  return { playSendSound, playReceiveSound, playPressSound, playReleaseSound };
};
