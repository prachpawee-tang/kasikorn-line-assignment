import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Banner from "@/components/BannerList/Banner";

describe("Banner Component", () => {
  const mockBanner = {
    image: "/test-image.jpg",
    title: "Test Banner Title",
    description: "Test Banner Description",
  };

  it("renders banner component correctly", () => {
    render(<Banner banner={mockBanner} />);

    // Check if the link exists
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();

    // Check if image is rendered with correct attributes
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockBanner.image);
    expect(image).toHaveAttribute("alt", mockBanner.title);

    // Check if title is rendered
    const title = screen.getByText(mockBanner.title);
    expect(title).toBeInTheDocument();

    // Check if description is rendered
    const description = screen.getByText(mockBanner.description);
    expect(description).toBeInTheDocument();
  });
});
