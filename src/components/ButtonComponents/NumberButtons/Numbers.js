import React, { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

const Numbers = ({ handleClick }) => {
  const [numData] = useState(numbers);
  return (
    <div className="number-container">
      {numData.map((num, i) => {
        if (num === ".") {
          return (
            <NumberButton
              key={i}
              number={num}
              handleNumClick={handleClick}
              state={useState}
            />
          );
        } else {
          return (
            <NumberButton
              key={i}
              number={parseInt(num)}
              handleClickNum={handleClick}
              state={useState}
            />
          );
        }
      })}
    </div>
  );
};

export default Numbers;
