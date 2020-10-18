import React from "react";

const OperatorButton = (props) => {
  if (props.char === "=") {
    return (
      <button className="operator-button button" value={props.char}>
        {props.char}
      </button>
    );
  } else
    return (
      <>
        <button className="operator-button button" value={props.value}>
          {props.char}
        </button>
      </>
    );
};

export default OperatorButton;
