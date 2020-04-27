import React, { useEffect } from "react";

import { useAudioContext } from "../hooks/useAudioContext";

function Oscillator({ frequency }) {
  console.log(`Oscillator rendered with frequency: ${frequency || 440}Hz`);
  const { audioCtx, pause, play } = useAudioContext();

  useEffect(() => {
    console.log(`Create oscillator with frequency: ${frequency || 440}Hz`);
    const oscillator = audioCtx.createOscillator();
    if (frequency) {
      oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    }
    oscillator.connect(audioCtx.destination);
    oscillator.start();
  }, [audioCtx, frequency]);

  return (
    <div>
      <button onClick={play}>play</button>
      <button onClick={pause}>pause</button>
    </div>
  );
}

export default Oscillator;
