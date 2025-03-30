// PinInput.js
import React from "react";
import PinDot from "./PinDot";

const PinInput = ({ pinLength, currentLength }) => {
  return (
    <div className="pin__dots">
      {Array.from({ length: pinLength }).map((_, index) => (
        <PinDot key={index} filled={index < currentLength} />
      ))}
    </div>
  );
};

export default PinInput;
