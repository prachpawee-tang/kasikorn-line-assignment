import { render, screen } from "@testing-library/react";
import RecentListItem from "@/components/RecentList/RecentItem";

describe("RecentListItem", () => {
  const defaultProps = {
    name: "Test Item",
    image: "/test-image.jpg",
    isBank: false,
  };

  it("renders component correctly with default props", () => {
    render(<RecentListItem {...defaultProps} />);

    const link = screen.getByRole("link");
    const image = screen.getByRole("img");
    const name = screen.getByText("Test Item");

    expect(link).toHaveAttribute("href", "#");
    expect(image).toHaveAttribute("src", "/test-image.jpg");
    expect(name).toBeInTheDocument();
  });

  it("applies bank class when isBank is true", () => {
    render(<RecentListItem {...defaultProps} isBank={true} />);

    const thumb = screen.getByRole("img").parentElement;
    expect(thumb).toHaveClass("is-bank");
  });

  it("does not apply bank class when isBank is false", () => {
    render(<RecentListItem {...defaultProps} isBank={false} />);

    const thumb = screen.getByRole("img").parentElement;
    expect(thumb).not.toHaveClass("is-bank");
  });

  it("uses custom link when provided", () => {
    render(<RecentListItem {...defaultProps} link="https://example.com" />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://example.com");
  });
});
