import { render, screen } from "@testing-library/react";
import AccountActions from "@/components/MainAccountCard/AccountAction";

describe("AccountActions", () => {
  beforeEach(() => {
    render(<AccountActions />);
  });

  it("renders without crashing", () => {
    const mainElement = screen.getByTestId("main-actions");
    expect(mainElement).toBeInTheDocument();
  });

  it("renders all three action links", () => {
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
  });

  it("renders links with correct text and classes", () => {
    const withdrawalLink = screen.getByText("Withdrawal");
    const qrLink = screen.getByText("QR scan");
    const addMoneyLink = screen.getByText("Add money");

    expect(withdrawalLink).toHaveClass(
      "main-acc__link main-acc__link--withdrawal"
    );
    expect(qrLink).toHaveClass("main-acc__link main-acc__link--qr");
    expect(addMoneyLink).toHaveClass("main-acc__link main-acc__link--addmoney");
  });
});
