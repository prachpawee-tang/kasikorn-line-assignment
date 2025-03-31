// PinInput.js
import React from "react";
import PinDot from "../PinInput/PinDot";

interface PinInputProps {
  pinLength: number;
  currentLength: number;
}

const PinInput = ({ pinLength, currentLength }: PinInputProps) => {
  return (
    <div className="pin__dots">
      {Array.from({ length: pinLength }).map((_, index) => (
        <PinDot key={index} filled={index < currentLength} />
      ))}
    </div>
  );
};

export default PinInput;
