import React from "react";

import Oscillator from "./components/Oscillator";

function App() {
  console.log("App rendered");
  return (
    <>
      <Oscillator />
      <Oscillator frequency={523.25} />
    </>
  );
}

export default App;
