import React from "react";

const NumberButton = (props) => {
  if (props.number === 0) {
    return (
      <>
        <button className="number-button button" value={props.number}>
          {props.number}
        </button>
      </>
    );
  } else {
    return (
      <>
        {
          <button className="number-button button" value={props.number}>
            {props.number}
          </button>
        }
      </>
    );
  }
};

export default NumberButton;
