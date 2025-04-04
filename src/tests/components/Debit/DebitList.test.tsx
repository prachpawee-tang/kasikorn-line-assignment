import { render, screen } from "@testing-library/react";
import DebitList from "@/components/DebitList";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const MOCK = [
  {
    name: "My Salary",
    status: "in-progress",
    issuer: "TestLab",
    color: "#00a1e2",
  },
  {
    name: "For My Dream",
    status: "in-progress",
    issuer: "TestLab",
    color: "#ff8300",
  },
  {
    name: "My Debit card",
    status: "active",
    issuer: "TestLab",
    color: "#ffffff",
    borderColor: "#f2f3f7",
    number: "9440 7841 2222 3115",
  },
];

const createMockStore = (initialState: any) => {
  return configureStore({
    reducer: {
      debitCards: () => initialState,
    },
  });
};

describe("DebitList", () => {
  it("should render empty state when no debit cards exist", () => {
    const mockStore = createMockStore({
      DebitCards: [],
    });
    render(
      <Provider store={mockStore}>
        <DebitList />
      </Provider>
    );

    expect(screen.getByText("Make your Debit Card")).toBeInTheDocument();
  });

  it("should render list of debit cards when cards exist", () => {
    const mockStore = createMockStore({
      DebitCards: MOCK,
    });
    render(
      <Provider store={mockStore}>
        <DebitList />
      </Provider>
    );

    MOCK.forEach((debit) => {
      expect(screen.getByText(debit.name)).toBeInTheDocument();
    });
  });
});
