import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header Component", () => {
  const mockMenuClick = jest.fn();
  const mockCancelClick = jest.fn();

  beforeEach(() => {
    mockMenuClick.mockClear();
    mockCancelClick.mockClear();
  });

  it("renders header component correctly", () => {
    render(
      <Header onMenuClick={mockMenuClick} onCancelClick={mockCancelClick} />
    );

    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("calls onMenuClick when menu link is clicked", () => {
    render(
      <Header onMenuClick={mockMenuClick} onCancelClick={mockCancelClick} />
    );

    const menuButton = screen.getByText("Menu").parentElement;
    fireEvent.click(menuButton!);

    expect(mockMenuClick).toHaveBeenCalledTimes(1);
  });

  it("calls onCancelClick when cancel button is clicked", () => {
    render(
      <Header onMenuClick={mockMenuClick} onCancelClick={mockCancelClick} />
    );

    const cancelButton = screen.getByText("Cancel").parentElement;
    fireEvent.click(cancelButton!);

    expect(mockCancelClick).toHaveBeenCalledTimes(1);
  });
});
