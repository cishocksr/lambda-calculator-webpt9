import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numData] = useState(numbers);
  return (
    <div>
      {numData.map((num, i) => (
        <NumberButton key={i} num={num} />
      ))}
    </div>
  );
};

export default Numbers;
