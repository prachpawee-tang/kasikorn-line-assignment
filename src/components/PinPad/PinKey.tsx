// PinKey.js
import Image from "next/image";
import React from "react";
import DeleteIcon from "@/assets/delete.png";

interface PinKeyProps {
  value?: string;
  isDel?: boolean;
  isSpace?: boolean;
  onClick?: () => void;
}

const PinKey = ({ value, isDel, isSpace, onClick }: PinKeyProps) => {
  if (isSpace) {
    return <span className="pin__key pin__key--space"></span>;
  }

  if (isDel) {
    return (
      <button
        type="button"
        className="pin__key pin__key--del"
        onClick={onClick}
      >
        <Image
          src={DeleteIcon}
          alt="Delete"
          width={26}
          height={26}
          className="mx-auto"
        />
      </button>
    );
  }

  return (
    <button type="button" className="pin__key" onClick={onClick}>
      {value}
    </button>
  );
};

export default PinKey;
