import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import RecentList from "@/components/RecentList";

const createMockStore = (initialState: any) => {
  return configureStore({
    reducer: {
      transactions: () => initialState,
    },
  });
};

describe("RecentList", () => {
  const MOCK = [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
  ];

  let mockStore;

  beforeEach(() => {
    mockStore = createMockStore({
      recents: MOCK,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(
      <Provider store={mockStore}>
        <RecentList />
      </Provider>
    );

    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("renders correct number of RecentListItem components", () => {
    render(
      <Provider store={mockStore}>
        <RecentList />
      </Provider>
    );

    const items = screen.getAllByTestId("recent-item");
    expect(items).toHaveLength(2);
  });

  it("passes correct props to RecentListItem", () => {
    render(
      <Provider store={mockStore}>
        <RecentList />
      </Provider>
    );
  });

  it("selects recents from redux store", () => {});
});
