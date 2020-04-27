import { useEffect, useRef } from "react";

export function useAudioContext() {
  const audioCtxRef = useRef();
  if (!audioCtxRef.current) {
    // Create once.
    console.log("Creating AudioContext");
    audioCtxRef.current = new AudioContext();
  }
  const audioCtx = audioCtxRef.current;

  function pause() {
    audioCtx.suspend();
  }

  function play() {
    audioCtx.resume();
  }

  useEffect(() => {
    /** auto-play is very rude */
    if (audioCtx.state === "running") {
      audioCtx.suspend();
    }

    return () => {
      audioCtx.close();
    };
  }, [audioCtx]);

  return { audioCtx, pause, play };
}
