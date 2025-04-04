import { getCurrencySymbol } from "@/utils/currencySymbol";

describe("getCurrencySymbol", () => {
  // Test valid currency codes
  test("returns correct symbol for known currency codes", () => {
    expect(getCurrencySymbol("THB")).toBe("฿");
    expect(getCurrencySymbol("USD")).toBe("$");
    expect(getCurrencySymbol("EUR")).toBe("€");
    expect(getCurrencySymbol("JPY")).toBe("¥");
    expect(getCurrencySymbol("GBP")).toBe("£");
  });

  // Test case insensitivity
  test("handles lowercase currency codes correctly", () => {
    expect(getCurrencySymbol("thb")).toBe("฿");
    expect(getCurrencySymbol("usd")).toBe("$");
    expect(getCurrencySymbol("eur")).toBe("€");
  });

  // Test mixed case
  test("handles mixed case currency codes correctly", () => {
    expect(getCurrencySymbol("ThB")).toBe("฿");
    expect(getCurrencySymbol("UsD")).toBe("$");
  });

  // Test unknown currency codes
  test("returns original code for unknown currency codes", () => {
    expect(getCurrencySymbol("XYZ")).toBe("XYZ");
    expect(getCurrencySymbol("ABC")).toBe("ABC");
  });

  // Test empty string
  test("handles empty string", () => {
    expect(getCurrencySymbol("")).toBe("");
  });
});
