import { render, screen } from "@testing-library/react";
import BubbleTooltip from "@/components/Menu/BubbleTooltip";

describe("BubbleTooltip", () => {
  const defaultProps = {
    show: true,
    tip: "Test tooltip",
  };

  it("renders tooltip when show is true", () => {
    render(<BubbleTooltip {...defaultProps} />);

    const tooltip = screen.getByText("Test tooltip");
    const tooltipContainer = tooltip.parentElement;

    expect(tooltip).toBeInTheDocument();
    expect(tooltipContainer).toHaveStyle({ display: "block" });
    expect(tooltipContainer).toHaveClass(
      "tooltip",
      "tooltip--bubble",
      "tooltip--right-under"
    );
  });

  it("hides tooltip when show is false", () => {
    render(<BubbleTooltip {...defaultProps} show={false} />);

    const tooltip = screen.getByText("Test tooltip");
    const tooltipContainer = tooltip.parentElement;

    expect(tooltipContainer).toHaveStyle({ display: "none" });
  });

  it("displays the correct tooltip text", () => {
    const customTip = "Custom tooltip message";
    render(<BubbleTooltip {...defaultProps} tip={customTip} />);

    expect(screen.getByText(customTip)).toBeInTheDocument();
  });
});
