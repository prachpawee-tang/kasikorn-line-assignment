import { renderHook, act } from "@testing-library/react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe("useAuth", () => {
  // Mock implementations
  const mockPush = jest.fn();
  const mockRouter = { push: mockPush };
  const mockPathname = "/dashboard";

  // Mock localStorage
  const mockLocalStorage = {
    getItem: jest.fn(),
  };

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();

    // Setup mocks
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    (usePathname as jest.Mock).mockReturnValue(mockPathname);

    // Setup localStorage mock
    Object.defineProperty(window, "localStorage", {
      value: mockLocalStorage,
      writable: true,
    });

    // Reset timer mocks
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should show loading state initially", () => {
    mockLocalStorage.getItem.mockReturnValue(null);

    const { result } = renderHook(() => useAuth());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isAuthenticated).toBe(false);
  });

  it("should not be loading after timer if authenticated", () => {
    mockLocalStorage.getItem.mockReturnValue("true");

    const { result } = renderHook(() => useAuth());

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isAuthenticated).toBe(true);
  });

  it("should redirect to passcode page if not authenticated", () => {
    mockLocalStorage.getItem.mockReturnValue(null);

    renderHook(() => useAuth());

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(mockPush).toHaveBeenCalledWith("/passcode");
  });

  it("should not redirect if already on passcode page", () => {
    mockLocalStorage.getItem.mockReturnValue(null);
    (usePathname as jest.Mock).mockReturnValue("/passcode");

    renderHook(() => useAuth());

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(mockPush).not.toHaveBeenCalled();
  });

  it("should cleanup timer on unmount", () => {
    const clearTimeoutSpy = jest.spyOn(window, "clearTimeout");

    const { unmount } = renderHook(() => useAuth());
    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalled();
  });
});
