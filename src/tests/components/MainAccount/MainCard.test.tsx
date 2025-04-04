import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import MainAccountCard from "@/components/MainAccountCard";

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
    isMainAccount: true,
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

// Mock the child components
jest.mock("@/components/menu", () => {
  return function MockMenu({ items, tip }: { items: any[]; tip: string }) {
    return (
      <div data-testid="mock-menu" data-tip={tip}>
        {items.length} items
      </div>
    );
  };
});

jest.mock("@/components/MainAccountCard/AccountInfo", () => {
  return function MockAccountInfo({ info }: { info: any }) {
    return <div data-testid="mock-account-info" />;
  };
});

jest.mock("@/components/MainAccountCard/AccountAction", () => {
  return function MockAccountActions() {
    return <div data-testid="mock-account-actions" />;
  };
});

describe("MainAccountCard", () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it("should render nothing when mainAccount is null", () => {
    const mockStore = createMockStore({
      accounts: [],
    });

    const { container } = render(
      <Provider store={mockStore}>
        <MainAccountCard />
      </Provider>
    );
    expect(container).toBeEmptyDOMElement();
  });

  it("should render all components when mainAccount exists", () => {
    const mockStore = createMockStore({
      accounts: MOCK,
    });

    render(
      <Provider store={mockStore}>
        <MainAccountCard />
      </Provider>
    );

    // Check if all components are rendered
    expect(screen.getByTestId("mock-account-info")).toBeInTheDocument();
    expect(screen.getByTestId("mock-account-actions")).toBeInTheDocument();
    expect(screen.getByTestId("mock-menu")).toBeInTheDocument();
  });

  it("should render menu with correct props", () => {
    const mockStore = createMockStore({
      accounts: MOCK,
    });

    render(
      <Provider store={mockStore}>
        <MainAccountCard />
      </Provider>
    );

    const menu = screen.getByTestId("mock-menu");
    expect(menu).toHaveAttribute(
      "data-tip",
      "Change your main account for Using transfer, Wallet more easily"
    );
    expect(menu).toHaveTextContent("3 items"); // Menu has 3 items
  });

  it("should render with correct CSS classes", () => {
    const mockStore = createMockStore({
      accounts: MOCK,
    });

    const { container } = render(
      <Provider store={mockStore}>
        <MainAccountCard />
      </Provider>
    );

    const mainDiv = container.firstChild;
    expect(mainDiv).toHaveClass(
      "main-acc",
      "main-acc--large",
      "main-loading",
      "main-loading--order3"
    );
  });
});
