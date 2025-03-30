import React from "react";

const Header = ({ onMenuClick, onCancelClick }) => {
  return (
    <header className="header ">
      <a href="#" className="header__lft header__menu" onClick={onMenuClick}>
        <span className="blind">Menu</span>
      </a>
      <button
        type="button"
        className="header__rgt header__cxl"
        onClick={onCancelClick}
      >
        <span className="blind">Cancel</span>
      </button>
    </header>
  );
};

export default Header;
