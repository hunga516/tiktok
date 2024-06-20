import { useState } from "react";
import React from 'react';
import Content from "./Content";


function App() {
  const [toggle, setToggle] = useState(false)

  function handleToggle() {
    setToggle(prev => !prev)
  }

  return (
    <div className="App">
      <button onClick={handleToggle}>Toggle</button>
      {toggle && <Content />}
    </div>
  );
}

export default App;
