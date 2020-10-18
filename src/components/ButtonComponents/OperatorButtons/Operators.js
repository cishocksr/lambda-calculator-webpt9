import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  const [oppState] = useState(operators);
  return (
    <div>
      {oppState.map((opp, i) => (
        <OperatorButton key={i} char={opp.char} operator={opp.value} />
      ))}
    </div>
  );
};

export default Operators;
