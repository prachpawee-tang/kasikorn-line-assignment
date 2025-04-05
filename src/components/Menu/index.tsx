import { isDesktop } from "@/utils/isDesktop";
import ActionsTooltip from "./ActionTooltip";
import BubbleTooltip from "./BubbleTooltip";
import { useEffect, useState, useRef } from "react";

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
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const touchTimerRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    setIsMobile(!isDesktop());
  }, []);

  const handleClick = (): void => {
    if (isMobile) {
      setShowTooltip(false);
    }
    setShowAction(!showAction);
  };
  const handleMouseEnter = (): void => {
    if (!isMobile && tip) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = (): void => {
    if (!isMobile && tip) {
      setShowTooltip(false);
    }
  };
  const handleBlur = (): void => {
    setShowTooltip(false);
    setShowAction(false);
  };

  const handleTouchStart = (): void => {
    if (!isMobile || !tip) return;

    setShowTooltip(true);
    touchTimerRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 1000);
  };

  const handleTouchEnd = (): void => {
    if (!isMobile || !tip) return;

    if (touchTimerRef.current) {
      clearTimeout(touchTimerRef.current);
    }
    setShowTooltip(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const menu = menuRef.current;
      if (menu && !menu.contains(event.target as Node)) {
        setShowAction(false);
        setShowTooltip(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className={`absolute top-[${
        size === "small" ? "12px" : "24px"
      }] right-[11px]`}
    >
      <button
        ref={buttonRef}
        type="button"
        className={`main-acc__more ${size ? `main-acc__more--${size}` : ""}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        // onBlur={handleBlur}
        aria-expanded={showAction}
        aria-label="More actions"
        data-testid="menu-component"
      >
        <span className="blind">More Action</span>
      </button>
      <ActionsTooltip items={items} show={showAction} />
      {tip && <BubbleTooltip tip={tip} show={showTooltip} />}
    </div>
  );
};

export default Menu;
