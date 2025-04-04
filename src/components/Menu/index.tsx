import ActionsTooltip from "./ActionTooltip";
import BubbleTooltip from "./BubbleTooltip";
import { useState } from "react";

interface MenuItem {
  label: string;
  action: () => void;
}

interface MenuProps {
  items?: MenuItem[];
  tip?: string;
  size?: "small" | "default";
}

const Menu = ({ items = [], tip, size }: MenuProps) => {
  const [showAction, setShowAction] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const handleClick = (): void => setShowAction(!showAction);
  const handleMouseEnter = (): void => tip && setShowTooltip(true);
  const handleMouseLeave = (): void => tip && setShowTooltip(false);
  const handleBlur = (): void => {
    setShowTooltip(false);
    setShowAction(false);
  };

  return (
    <>
      <button
        type="button"
        className={`main-acc__more ${size ? `main-acc__more--${size}` : ""}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onBlur={handleBlur}
        aria-expanded={showAction}
        aria-label="More actions"
        data-testid="menu-component"
      >
        <span className="blind">More Action</span>
      </button>
      <ActionsTooltip items={items} show={showAction} />
      {tip && <BubbleTooltip tip={tip} show={showTooltip} />}
    </>
  );
};

export default Menu;
