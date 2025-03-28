// PinDot.js
import React from "react";
import "@/styles/th-bank.css";

const PinDot = ({ filled }) => (
  <span className={`pin__dot ${filled ? "is-filled" : ""}`}></span>
);

export default PinDot;
