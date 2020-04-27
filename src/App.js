import React from 'react';
import bows from 'bows';

import Oscillator from './components/Oscillator';

const log = bows('App');

function App() {
  log('rendered App');
  return (
    <>
      <Oscillator />
      <Oscillator frequency={523.25} />
    </>
  );
}

export default App;
