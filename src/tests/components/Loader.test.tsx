import Loader from "@/components/Loader";
import { render, screen } from "@testing-library/react";

describe("Test Loader component", () => {
  beforeEach(() => {
    render(<Loader />);
  });

  it("Should render loader", () => {
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
