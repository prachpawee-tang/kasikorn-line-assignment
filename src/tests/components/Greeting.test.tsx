import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Greeting from "@/components/Greeting";

// Mock the Redux store
const createMockStore = (initialState: any) => {
  return configureStore({
    reducer: {
      user: () => initialState,
    },
  });
};

describe("Greeting", () => {
  it("renders greeting message when available", () => {
    const mockStore = createMockStore({
      greetingMessage: "Good morning!",
      name: "John",
    });

    render(
      <Provider store={mockStore}>
        <Greeting />
      </Provider>
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Good morning!"
    );
  });

  it("renders default message with name when no greeting message", () => {
    const mockStore = createMockStore({
      greetingMessage: "",
      name: "John",
    });

    render(
      <Provider store={mockStore}>
        <Greeting />
      </Provider>
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Have a nice day John"
    );
  });
});
