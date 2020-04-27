import React, { useCallback, useEffect } from 'react';
import bows from 'bows';

import { withAudioContext } from '../hoc/withAudioContext';

function Oscillator({ audioCtx, pause, play, frequency }) {
  const log = useCallback((msg) => bows(`Osc @ ${frequency || 440}Hz`)(msg), [
    frequency,
  ]);
  log(`Oscillator rendered with frequency: ${frequency || 440}Hz`);

  useEffect(() => {
    log(`create oscillator with frequency: ${frequency || 440}Hz`);
    const oscillator = audioCtx.createOscillator();
    if (frequency) {
      oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    }
    oscillator.connect(audioCtx.destination);
    oscillator.start();
  }, [audioCtx, frequency, log]);

  return (
    <div>
      <button onClick={play}>play</button>
      <button onClick={pause}>pause</button>
    </div>
  );
}

export default withAudioContext(Oscillator)
