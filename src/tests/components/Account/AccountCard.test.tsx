import React from "react";
import { render, screen } from "@testing-library/react";
import AccountCard from "@/components/AccountList/AccountCard";
import { getCurrencySymbol } from "@/utils/currencySymbol";

// Mock Menu with a testid to assert its rendering
jest.mock("@/components/Menu", () => ({ items, size }: any) => (
  <div data-testid="menu-component">
    {items.map((item: any) => (
      <button key={item.label} onClick={item.action}>
        {item.label}
      </button>
    ))}
  </div>
));

describe("AccountCard", () => {
  const mockSmartAccount = {
    type: "smart-account" as const,
    color: "#FF0000",
    currency: "USD",
    amount: 1000.5,
    accountNumber: "1234567890",
    accountName: "Main Account",
    flags: ["Primary"],
    isMainAccount: false,
  };

  const mockGoalAccount = {
    type: "goal-saving-account" as const,
    color: "#00FF00",
    currency: "EUR",
    amount: 5000,
    accountNumber: "0987654321",
    accountName: "Vacation Fund",
    progress: 75,
    issuer: "Example Bank",
    isMainAccount: false,
  };

  it("renders basic account information correctly", () => {
    render(<AccountCard account={mockSmartAccount} />);

    expect(screen.getByText("Main Account")).toBeInTheDocument();
    expect(screen.getByText("smart account 1234567890")).toBeInTheDocument();
    expect(
      screen.getByText(`${getCurrencySymbol("USD")}1,000.5`)
    ).toBeInTheDocument();
  });

  it("renders flags when provided", () => {
    render(<AccountCard account={mockSmartAccount} />);

    expect(screen.getByText("Primary")).toBeInTheDocument();
  });

  it("renders progress circle for goal-saving accounts", () => {
    render(<AccountCard account={mockGoalAccount} />);

    expect(screen.getByText("75")).toBeInTheDocument();
    expect(screen.getByText("%")).toBeInTheDocument();

    // Verify SVG elements
    const circles = screen.getByTestId("circles");
    expect(circles.children).toHaveLength(2); // Two circles in the progress indicator
  });

  it("renders issuer information when provided", () => {
    render(<AccountCard account={mockGoalAccount} />);

    expect(screen.getByText("Powered by Example Bank")).toBeInTheDocument();
  });

  it("applies the correct background color", () => {
    render(<AccountCard account={mockSmartAccount} />);

    const container = screen.getByText("Main Account").closest(".main-acc");
    expect(container).toHaveStyle({ backgroundColor: "#FF0000" });
  });

  it("formats account type display correctly", () => {
    render(<AccountCard account={mockGoalAccount} />);

    expect(
      screen.getByText("goal saving account 0987654321")
    ).toBeInTheDocument();
  });

  it("renders the Menu component", () => {
    render(<AccountCard account={mockSmartAccount} />);

    expect(screen.getByTestId("menu-component")).toBeInTheDocument();
  });
});
