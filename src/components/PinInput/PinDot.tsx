// PinDot.js
import React from "react";

interface PinDotProps {
  filled: boolean;
}

const PinDot = ({ filled }: PinDotProps) => (
  <span className={`pin__dot ${filled ? "is-filled" : ""}`}></span>
);

export default PinDot;
