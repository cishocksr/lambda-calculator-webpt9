import React, { useState } from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";
import Logo from "./components/DisplayComponents/Logo";

function App() {
  const [display, setDisplay] = useState(0);

  function handleClick(e) {
    let value = e.target.value;
    setDisplay(display + value);
  }

  function handleClickNum(e) {
    let value = e.target.value;
    if (display === "0") {
      setDisplay(value);
    } else setDisplay(`${display}${value}`);
  }

  function handleEqual(e) {
    setDisplay(eval(display));
  }

  function handleClear() {
    setDisplay("0");
  }

  function percent(e) {
    let { value } = e.target.value;
    setDisplay(`${eval(display + value)}`);
  }
  function negative(e) {
    let value = e.target.value;
    let neg = `${eval(display + value)}`;
    setDisplay(neg);
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display display={display} />
        <div className="button-container">
          <div className="button-row">
            <Specials
              handleClick={handleClick}
              handleClear={handleClear}
              percent={percent}
              negative={negative}
            />
            <Numbers handleClick={handleClickNum} />
          </div>
          <div className="button-col">
            <Operators handleClick={handleClick} handleEqual={handleEqual} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
