import { render, screen, fireEvent } from "@testing-library/react";
import Menu from "@/components/Menu";

describe("Menu Component", () => {
  const mockItems = [
    { label: "Item 1", action: jest.fn() },
    { label: "Item 2", action: jest.fn() },
  ];

  it("renders without crashing", () => {
    render(<Menu items={mockItems} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("applies size modifier class correctly", () => {
    render(<Menu items={mockItems} size="small" />);
    expect(screen.getByRole("button")).toHaveClass("main-acc__more--small");
  });

  it("toggles action tooltip on click", () => {
    render(<Menu items={mockItems} />);
    const button = screen.getByRole("button");
    const actionsTooltip = screen.getByTestId("actions-tooltip");

    // Initial state
    expect(actionsTooltip).toHaveAttribute("data-show", "false");

    // Click to show
    fireEvent.click(button);
    expect(actionsTooltip).toHaveAttribute("data-show", "true");

    // Click to hide
    fireEvent.click(button);
    expect(actionsTooltip).toHaveAttribute("data-show", "false");
  });

  it("shows and hides bubble tooltip on hover when tip is provided", () => {
    const testTip = "Test Tooltip";
    render(<Menu items={mockItems} tip={testTip} />);
    const button = screen.getByRole("button");
    const bubbleTooltip = screen.getByTestId("bubble-tooltip");

    // Initial state
    expect(bubbleTooltip).toHaveAttribute("data-show", "false");

    // Mouse enter
    fireEvent.mouseEnter(button);
    expect(bubbleTooltip).toHaveAttribute("data-show", "true");

    // Mouse leave
    fireEvent.mouseLeave(button);
    expect(bubbleTooltip).toHaveAttribute("data-show", "false");
  });

  it("hides tooltips when clicking outside menu", () => {
    const testTip = "Test Tooltip";
    render(
      <div>
        <Menu items={mockItems} tip={testTip} />
        <div data-testid="outside-element">Outside</div>
      </div>
    );
    const button = screen.getByRole("button");
    const actionsTooltip = screen.getByTestId("actions-tooltip");
    const bubbleTooltip = screen.getByTestId("bubble-tooltip");
    const outsideElement = screen.getByTestId("outside-element");

    // Show tooltips
    fireEvent.click(button);
    fireEvent.mouseEnter(button);

    // Click outside should hide both tooltips
    fireEvent.mouseDown(outsideElement);
    expect(actionsTooltip).toHaveAttribute("data-show", "false");
    expect(bubbleTooltip).toHaveAttribute("data-show", "false");
  });

  it("does not render bubble tooltip when no tip is provided", () => {
    render(<Menu items={mockItems} />);
    expect(screen.queryByTestId("bubble-tooltip")).not.toBeInTheDocument();
  });
});
