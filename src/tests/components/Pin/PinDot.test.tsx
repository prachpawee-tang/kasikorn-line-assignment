import PinDot from "@/components/PinInput/PinDot";
import { render } from "@testing-library/react";

describe("Test PinDot component", () => {
  it("should render", () => {
    const { container } = render(<PinDot filled={true} />);
    expect(container).toBeInTheDocument();
  });

  it("has filled class when filled prop is true", () => {
    const { container } = render(<PinDot filled={true} />);
    const dot = container.firstChild as HTMLElement;
    expect(dot).toHaveClass("is-filled");
  });

  it("does not have filled class when filled prop is false", () => {
    const { container } = render(<PinDot filled={false} />);
    const dot = container.firstChild as HTMLElement;

    expect(dot).toHaveClass("pin__dot");
    expect(dot).not.toHaveClass("is-filled");
  });
});
