const ActionBtn = ({ onClick, children }) => (
  <button
    type="button"
    className="tooltip__btn-more"
    onClick={onClick}
    aria-label={children}
  >
    {children}
  </button>
);

const ActionTooltip = ({ show, items }) => (
  <div
    className="tooltip"
    style={{ display: show ? "block" : "none" }}
    role="menu"
  >
    {items.map(({ action, label }) => (
      <ActionBtn key={label} onClick={action}>
        {label}
      </ActionBtn>
    ))}
  </div>
);

export default ActionTooltip;
