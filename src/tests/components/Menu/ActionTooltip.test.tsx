import { render, screen, fireEvent } from "@testing-library/react";
import ActionTooltip from "@/components/Menu/ActionTooltip";

describe("ActionTooltip", () => {
  // ActionBtn tests
  describe("ActionBtn", () => {
    it("should call onClick handler when clicked", () => {
      const handleClick = jest.fn();
      render(
        <ActionTooltip
          show={true}
          items={[{ action: handleClick, label: "Test Button" }]}
        />
      );

      const button = screen.getByRole("button", { name: "Test Button" });
      fireEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  // ActionTooltip tests
  describe("ActionTooltip", () => {
    const mockItems = [
      { action: jest.fn(), label: "Item 1" },
      { action: jest.fn(), label: "Item 2" },
    ];

    it("should be visible when show is true", () => {
      const { container } = render(
        <ActionTooltip show={true} items={mockItems} />
      );
      const tooltip = container.firstChild as HTMLElement;
      expect(tooltip).toHaveStyle({ display: "block" });
    });

    it("should be hidden when show is false", () => {
      const { container } = render(
        <ActionTooltip show={false} items={mockItems} />
      );
      const tooltip = container.firstChild as HTMLElement;
      expect(tooltip).toHaveStyle({ display: "none" });
    });

    it("should render all items", () => {
      render(<ActionTooltip show={true} items={mockItems} />);

      const buttons = screen.getAllByRole("button");
      expect(buttons).toHaveLength(2);
      expect(screen.getByText("Item 1")).toBeInTheDocument();
      expect(screen.getByText("Item 2")).toBeInTheDocument();
    });

    it("should call correct action handlers", () => {
      const mockItems = [
        { action: jest.fn(), label: "Item 1" },
        { action: jest.fn(), label: "Item 2" },
      ];

      render(<ActionTooltip show={true} items={mockItems} />);

      const buttons = screen.getAllByRole("button");
      fireEvent.click(buttons[0]);
      fireEvent.click(buttons[1]);

      expect(mockItems[0].action).toHaveBeenCalledTimes(1);
      expect(mockItems[1].action).toHaveBeenCalledTimes(1);
    });
  });
});
