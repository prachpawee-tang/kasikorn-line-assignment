import PinInput from "@/components/PinInput";
import { render, screen } from "@testing-library/react";

describe("Test PinInput component", () => {
  it("render correctly", () => {
    render(<PinInput pinLength={4} currentLength={0} />);
    expect(screen.getByTestId("pin-dots")).toBeInTheDocument();
  });

  it("render correct number of dots", () => {
    const { container } = render(<PinInput pinLength={6} currentLength={0} />);
    const dots = container.getElementsByClassName("pin__dot");

    expect(dots.length).toBe(6);
  });

  it("render correct length", () => {
    const { container } = render(<PinInput pinLength={4} currentLength={2} />);
    const filledDots = container.querySelectorAll('[data-filled="true"]');
    const emptyDots = container.querySelectorAll('[data-filled="false"]');

    expect(filledDots.length).toBe(2);
    expect(emptyDots.length).toBe(2);
  });

  it("render full input correctly", () => {
    const { container } = render(<PinInput pinLength={4} currentLength={4} />);
    const filledDots = container.querySelectorAll('[data-filled="true"]');

    expect(filledDots.length).toBe(4);
  });

  it("render empty input correctly", () => {
    const { container } = render(<PinInput pinLength={4} currentLength={0} />);
    const emptyDots = container.querySelectorAll('[data-filled="false"]');

    expect(emptyDots.length).toBe(4);
  });
});
