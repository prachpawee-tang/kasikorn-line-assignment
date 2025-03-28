// PinPad.js
import React from "react";
import PinKey from "./PinKey";

const PinPad = ({ onKeyPress, onDelete }) => {
  const handleKeyPress = (value) => () => onKeyPress(value);

  return (
    <div className="pin__keys">
      <PinKey value="1" onClick={handleKeyPress("1")} />
      <PinKey value="2" onClick={handleKeyPress("2")} />
      <PinKey value="3" onClick={handleKeyPress("3")} />
      <PinKey value="4" onClick={handleKeyPress("4")} />
      <PinKey value="5" onClick={handleKeyPress("5")} />
      <PinKey value="6" onClick={handleKeyPress("6")} />
      <PinKey value="7" onClick={handleKeyPress("7")} />
      <PinKey value="8" onClick={handleKeyPress("8")} />
      <PinKey value="9" onClick={handleKeyPress("9")} />
      <PinKey isSpace />
      <PinKey value="0" onClick={handleKeyPress("0")} />
      <PinKey isDel onClick={onDelete} />
    </div>
  );
};

export default PinPad;
