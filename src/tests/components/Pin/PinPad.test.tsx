import { render, screen, fireEvent } from "@testing-library/react";
import PinPad from "@/components/PinPad";

describe("PinPad", () => {
  const mockOnKeyPress = jest.fn();
  const mockOnDelete = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all number keys, space, and delete button", () => {
    render(
      <PinPad
        onKeyPress={mockOnKeyPress}
        onDelete={mockOnDelete}
        disabled={false}
      />
    );

    // Check if all number keys are rendered
    for (let i = 0; i <= 9; i++) {
      expect(screen.getByTestId(`number-key-${i}`)).toBeInTheDocument();
    }

    // Check space and delete buttons
    expect(screen.getByTestId("space-key")).toBeInTheDocument();
    expect(screen.getByTestId("delete-key")).toBeInTheDocument();
  });

  it("calls onKeyPress with correct value when number keys are clicked", () => {
    render(
      <PinPad
        onKeyPress={mockOnKeyPress}
        onDelete={mockOnDelete}
        disabled={false}
      />
    );

    // Test clicking each number key
    for (let i = 0; i <= 9; i++) {
      fireEvent.click(screen.getByTestId(`number-key-${i}`));
      expect(mockOnKeyPress).toHaveBeenCalledWith(i.toString());
    }

    expect(mockOnKeyPress).toHaveBeenCalledTimes(10);
  });

  it("calls onDelete when delete button is clicked", () => {
    render(
      <PinPad
        onKeyPress={mockOnKeyPress}
        onDelete={mockOnDelete}
        disabled={false}
      />
    );

    fireEvent.click(screen.getByTestId("delete-key"));
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });

  it("disables all interactions when disabled prop is true", () => {
    render(
      <PinPad
        onKeyPress={mockOnKeyPress}
        onDelete={mockOnDelete}
        disabled={true}
      />
    );

    const container = screen.getByTestId("delete-key").parentElement;
    expect(container).toHaveStyle({ pointerEvents: "none" });
  });

  it("enables all interactions when disabled prop is false", () => {
    render(
      <PinPad
        onKeyPress={mockOnKeyPress}
        onDelete={mockOnDelete}
        disabled={false}
      />
    );

    const container = screen.getByTestId("delete-key").parentElement;
    expect(container).toHaveStyle({ pointerEvents: "auto" });
  });
});
