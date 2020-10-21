import React from "react";

const NumberButton = ({ number, handleClickNum }) => {
  if (number === 0) {
    return (
      <button
        className="zero number-button button"
        value={number}
        onClick={handleClickNum}
      >
        {number}
      </button>
    );
  } else {
    return (
      <>
        {
          <button
            className="number-button button"
            value={number}
            onClick={handleClickNum}
          >
            {number}
          </button>
        }
      </>
    );
  }
};

export default NumberButton;
