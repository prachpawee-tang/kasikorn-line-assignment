const BubbleTooltip = ({ show, tip }) => (
  <div
    className="tooltip tooltip--bubble tooltip--right-under"
    style={{ display: show ? "block" : "none" }}
    data-testid="bubble-tooltip"
    data-show={show}
  >
    <span className="tooltip__txt">{tip}</span>
  </div>
);

export default BubbleTooltip;
