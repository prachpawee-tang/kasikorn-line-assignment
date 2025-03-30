import ActionsTooltip from "./ActionTooltip";
import BubbleTooltip from "./BubbleTooltip";
import React, { useState } from "react";

const Menu = ({ items = [], tip, size }) => {
  const [showAction, setShowAction] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <button
        type="button"
        className={"main-acc__more" + (size ? ` main-acc__more--${size}` : "")}
        onClick={() => setShowAction(!showAction)}
        onMouseEnter={() => tip && setShowTooltip(true)}
        onMouseLeave={() => tip && setShowTooltip(false)}
        onBlur={() => {
          setShowTooltip(false);
          setShowAction(false);
        }}
      >
        <span className="blind">More Action</span>
      </button>
      <ActionsTooltip items={items} show={showAction} />
      {tip && <BubbleTooltip tip={tip} show={showTooltip} />}
    </>
  );
};

export default Menu;
