import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButtons from "./SpecialButton";

const Specials = (props) => {
  const [special] = useState(specials);
  console.log(special);
  return (
    <div>
      {special.map((spec, i) => {
        return <SpecialButtons key={i} special={spec} value={special[i]} />;
      })}
    </div>
  );
};

export default Specials;
