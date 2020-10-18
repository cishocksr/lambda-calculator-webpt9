import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file

const Numbers = (props) => {
  const [numData] = useState(numbers);
  return (
    <div>
      {numData.map((num, i) => {
        if (num === ".") {
          return <NumberButton key={i} number={num} state={useState} />;
        } else {
          return (
            <NumberButton key={i} number={parseInt(num)} state={useState} />
          );
        }
      })}
    </div>
  );
};

export default Numbers;
