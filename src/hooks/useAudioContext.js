import { useEffect, useRef } from "react";

export function useAudioContext() {
  const audioCtxRef = useRef();
  
  function getContext() {
    if (!audioCtxRef.current) {
      // Create once.
      console.log("Creating AudioContext");
      audioCtxRef.current = new AudioContext();
    }
    return audioCtxRef.current;
  }

  function pause() {
    getContext().suspend();
  }

  function play() {
    getContext().resume();
  }

  useEffect(() => {
    const audioCtx = getContext();

    /** auto-play is very rude */
    if (audioCtx.state === "running") {
      audioCtx.suspend();
    }

    return () => {
      audioCtx.close();
    };
  }, []);

  return { getContext, pause, play };
}
