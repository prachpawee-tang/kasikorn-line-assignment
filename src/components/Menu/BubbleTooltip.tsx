const BubbleTooltip = ({ show, tip }) => (
  <div
    className="tooltip tooltip--bubble tooltip--right-under"
    style={{ display: show ? "block" : "none" }}
  >
    <span className="tooltip__txt">{tip}</span>
  </div>
);

export default BubbleTooltip;
