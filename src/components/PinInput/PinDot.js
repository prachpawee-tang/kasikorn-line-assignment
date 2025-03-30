// PinDot.js
import React from "react";

const PinDot = ({ filled }) => (
  <span className={`pin__dot ${filled ? "is-filled" : ""}`}></span>
);

export default PinDot;
