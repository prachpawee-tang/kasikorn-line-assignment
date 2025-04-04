import { render, screen } from "@testing-library/react";
import DebitItem from "@/components/DebitList/DebitItem";

describe("DebitItem", () => {
  const defaultProps = {
    name: "Test Card",
    status: "active" as const,
    issuer: "Test Bank",
    color: "#ffffff",
    number: "1234 5678 9012 3456",
  };

  it("renders with all props correctly", () => {
    render(<DebitItem {...defaultProps} />);

    expect(screen.getByText("Test Card")).toBeInTheDocument();
    expect(screen.getByText("Issued by Test Bank")).toBeInTheDocument();
  });

  it("masks card number correctly for active status", () => {
    render(<DebitItem {...defaultProps} />);

    const maskedNumber = screen.getByText(/1234 56•• •••• 3456/);
    expect(maskedNumber).toBeInTheDocument();
  });

  it("shows correct status text for in-progress status", () => {
    render(<DebitItem {...defaultProps} status="in-progress" />);

    expect(screen.getByText("in progress")).toBeInTheDocument();
  });

  it("applies correct styling with custom color and border", () => {
    const customProps = {
      ...defaultProps,
      color: "#ff0000",
      borderColor: "#000000",
    };

    render(<DebitItem {...customProps} />);

    const cardElement = screen.getByRole("link");
    expect(cardElement).toHaveStyle({
      backgroundColor: "#ff0000",
      borderColor: "#000000",
      borderWidth: "1px",
      borderStyle: "solid",
    });
  });

  it("applies correct text color for white background", () => {
    render(<DebitItem {...defaultProps} color="#ffffff" />);

    const cardElement = screen.getByRole("link");
    expect(cardElement).toHaveStyle({
      color: "#97999e",
    });
  });

  it("handles missing card number gracefully", () => {
    const propsWithoutNumber = {
      ...defaultProps,
      number: undefined,
    };

    render(<DebitItem {...propsWithoutNumber} />);

    // Should not throw any errors
    expect(screen.getByText("Test Card")).toBeInTheDocument();
  });
});
