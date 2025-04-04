import { render, screen } from "@testing-library/react";
import AccountInfo from "@/components/MainAccountCard/AccountInfo";
import { getCurrencySymbol } from "@/utils/currencySymbol";

// Mock the currency symbol utility
jest.mock("@/utils/currencySymbol", () => ({
  getCurrencySymbol: jest.fn().mockReturnValue("$"),
}));

describe("AccountInfo", () => {
  const mockAccount = {
    type: "Savings",
    amount: 12345.67,
    currency: "USD",
    accountNumber: "****1234",
    issuer: "Test Bank",
    color: "#000000",
    isMainAccount: true,
    accountName: "My Savings Account",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders account information correctly", () => {
    render(<AccountInfo info={mockAccount} />);

    // Check if account name is rendered
    expect(screen.getByText("My Savings Account")).toBeInTheDocument();

    // Check if amount is rendered with currency symbol and proper formatting
    expect(screen.getByText("$12,345.67")).toBeInTheDocument();

    // Check if account type and number are rendered
    expect(screen.getByText("Savings ****1234")).toBeInTheDocument();

    // Check if issuer information is rendered
    expect(screen.getByText("Powered by Test Bank")).toBeInTheDocument();
  });

  it("calls getCurrencySymbol with correct currency", () => {
    render(<AccountInfo info={mockAccount} />);

    expect(getCurrencySymbol).toHaveBeenCalledWith("USD");
    expect(getCurrencySymbol).toHaveBeenCalledTimes(1);
  });
});
