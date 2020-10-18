import React from "react";

const SpecialButton = (props) => {
  if (props.special === "+/-") {
    return (
      <>
        <button className="special-button button" value={`* ${-1}`}>
          {props.special}
        </button>
      </>
    );
  } else if (props.special === "%") {
    return (
      <button className="special-button button" value={`* .01`}>
        {props.special}
      </button>
    );
  } else if (props.special === "C") {
    return (
      <button className="special-button button" value={props.special}>
        {props.special}
      </button>
    );
  } else {
    return (
      <>
        {
          <button className="special-button button" value={props.special}>
            {props.special}
          </button>
        }
      </>
    );
  }
};

export default SpecialButton;
