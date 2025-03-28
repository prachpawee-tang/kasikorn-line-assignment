// PinInput.js
import React from "react";
import PinDot from "./PinDot";
import "@/styles/th-bank.css";

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
