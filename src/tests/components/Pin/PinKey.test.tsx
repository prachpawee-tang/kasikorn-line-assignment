import PinKey from "@/components/PinPad/PinKey";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Test PinKey component", () => {
  it("show number correctly", () => {
    const { container } = render(<PinKey value="1" />);

    expect(container.textContent).toBe("1");
    expect(container.firstChild).toHaveClass("pin__key");
  });

  it("show space correctly", () => {
    const { container } = render(<PinKey isSpace />);
    const key = container.firstChild as HTMLElement;

    expect(key.classList.contains("pin__key--space")).toBe(true);
  });

  it("show delete correctly", () => {
    const { container } = render(<PinKey isDel />);
    const key = container.firstChild as HTMLElement;

    expect(key.classList.contains("pin__key--del")).toBe(true);
  });

  it("call onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<PinKey value="1" onClick={handleClick} />);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
