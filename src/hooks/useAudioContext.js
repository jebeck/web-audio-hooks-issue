import { useEffect, useRef } from "react";

// Shared between all components.
let audioCtx;

export function useAudioContext() {
  if (!audioCtx) {
    // Create once.
    console.log("Creating AudioContext");
    audioCtx = new AudioContext();
  }

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
