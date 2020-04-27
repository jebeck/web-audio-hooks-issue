import { useEffect } from 'react';

export function useAudioContext() {
  const audioCtx = new AudioContext();

  function pause() {
    audioCtx.suspend();
  }

  function play() {
    audioCtx.resume();
  }

  useEffect(() => {
    /** auto-play is very rude */
    if (audioCtx.state === 'running') {
      audioCtx.suspend();
    }

    return () => {
      audioCtx.close();
    };
  }, [audioCtx]);

  return { audioCtx, pause, play };
}
