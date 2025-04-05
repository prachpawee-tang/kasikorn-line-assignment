import { isDesktop } from "@/utils/isDesktop";

describe("isDesktop", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return true for desktop user agent", () => {
    jest
      .spyOn(navigator, "userAgent", "get")
      .mockReturnValue("Mozilla/5.0 (Windows NT 10.0; Win64; x64)");
    expect(isDesktop()).toBe(true);
  });

  it("should return false for iPhone user agent", () => {
    jest
      .spyOn(navigator, "userAgent", "get")
      .mockReturnValue(
        "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)"
      );
    expect(isDesktop()).toBe(false);
  });

  it("should return false for iPad user agent", () => {
    jest
      .spyOn(navigator, "userAgent", "get")
      .mockReturnValue("Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X)");
    expect(isDesktop()).toBe(false);
  });

  it("should return false for Android user agent", () => {
    jest
      .spyOn(navigator, "userAgent", "get")
      .mockReturnValue("Mozilla/5.0 (Linux; Android 10; SM-G960U)");
    expect(isDesktop()).toBe(false);
  });

  it("should return true when user agent is undefined", () => {
    jest.spyOn(navigator, "userAgent", "get").mockReturnValue("");
    expect(isDesktop()).toBe(true);
  });
});
