// PinInput.js
import React from "react";
import PinDot from "./PinDot";

interface PinInputProps {
  pinLength: number;
  currentLength: number;
}

const PinInput = ({ pinLength, currentLength }: PinInputProps) => {
  return (
    <div className="pin__dots" data-testid="pin-dots">
      {Array.from({ length: pinLength }).map((_, index) => (
        <PinDot key={index} filled={index < currentLength} />
      ))}
    </div>
  );
};

export default PinInput;
