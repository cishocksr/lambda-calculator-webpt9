import React, { useState } from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";
import Logo from "./components/DisplayComponents/Logo";

function App() {
  const [display, setDisplay] = useState(0);

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display display={display} />
        <div className="button-container">
          <div className="buttpn-row">
            <Specials display={display} setDisplay={setDisplay} />
            <Numbers display={display} setDisplay={setDisplay} />
          </div>
          <div className="button-col">
            <Operators display={display} setDisplay={setDisplay} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
