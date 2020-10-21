import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButtons from "./SpecialButton";

const Specials = (props) => {
  const [special] = useState(specials);
  console.log(special);
  return (
    <div className="special-container">
      {special.map((spec, i) => {
        return <SpecialButtons key={i} special={spec} value={special[i]} />;
      })}
    </div>
  );
};

export default Specials;
