import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButtons from "./SpecialButton";

//Import your array data to from the provided data file

const Specials = (props) => {
  const [specialState] = useState(specials);

  return (
    <div>
      {specialState.map((spec, i) => (
        <SpecialButtons key={i} specials={spec} />
      ))}
    </div>
  );
};

export default Specials;
