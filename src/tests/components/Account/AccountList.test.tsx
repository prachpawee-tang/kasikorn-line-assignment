import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import AccountList from "@/components/AccountList";

const createMockStore = (initialState: any) => {
  return configureStore({
    reducer: {
      accounts: () => initialState,
    },
  });
};

const MOCK = [
  {
    type: "goal-saving-account",
    amount: 1000,
    currency: "THB",
    accountNumber: "1234567890",
    issuer: "Kasikorn",
    progress: 50,
    color: "#FF0000",
    isMainAccount: false,
    accountName: "Savings Account",
  },
  {
    type: "smart-account",
    amount: 2000,
    currency: "THB",
    accountNumber: "0987654321",
    issuer: "Kasikorn",
    progress: 75,
    color: "#00FF00",
    isMainAccount: false,
    accountName: "Smart Account",
  },
];

describe("AccountList", () => {
  it("renders list of accounts correctly", () => {
    const mockStore = createMockStore({
      accounts: MOCK,
    });
    render(
      <Provider store={mockStore}>
        <AccountList />
      </Provider>
    );

    MOCK.forEach((account) => {
      expect(screen.getByText(account.accountName)).toBeInTheDocument();
    });
  });

  it("renders empty state when no accounts are available", () => {
    const mockStore = createMockStore({
      accounts: [],
    });
    render(
      <Provider store={mockStore}>
        <AccountList />
      </Provider>
    );

    expect(screen.queryByText(MOCK[0].accountName)).not.toBeInTheDocument();
  });
});
