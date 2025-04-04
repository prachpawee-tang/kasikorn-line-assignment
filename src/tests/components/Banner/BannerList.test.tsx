import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import BannerList from "@/components/BannerList";

const createMockStore = (initialState: any) => {
  return configureStore({
    reducer: {
      banners: () => initialState,
    },
  });
};

describe("BannerList", () => {
  it("renders banner list correctly", () => {
    const mockStore = createMockStore({
      banners: [
        {
          title: "Banner 1",
          description: "Banner 1 description",
          image: "https://dummyimage.com/54x54/999/fff",
        },
        {
          title: "Banner 2",
          description: "Banner 2 description",
          image: "https://dummyimage.com/54x54/999/fff",
        },
      ],
    });
    render(
      <Provider store={mockStore}>
        <BannerList />
      </Provider>
    );

    const bannerElements = screen.getAllByTestId("banner");
    expect(bannerElements).toHaveLength(2);
    expect(bannerElements[0]).toHaveTextContent("Banner 1");
    expect(bannerElements[1]).toHaveTextContent("Banner 2");
  });

  it("renders empty list when no banners", () => {
    const mockStore = createMockStore({
      banners: [],
    });
    render(
      <Provider store={mockStore}>
        <BannerList />
      </Provider>
    );

    const bannerElements = screen.queryAllByTestId("banner");
    expect(bannerElements).toHaveLength(0);
  });

  it("renders null when banners is undefined", () => {
    const mockStore = createMockStore({
      banners: undefined,
    });
    render(
      <Provider store={mockStore}>
        <BannerList />
      </Provider>
    );

    const bannerElements = screen.queryAllByTestId("banner");
    expect(bannerElements).toHaveLength(0);
  });
});
