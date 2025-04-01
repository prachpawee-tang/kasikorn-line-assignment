const currencySymbols: Record<string, string> = {
  THB: "฿",
  USD: "$",
  EUR: "€",
  JPY: "¥",
  GBP: "£",
  AUD: "A$",
  CAD: "C$",
  CNY: "¥",
  KRW: "₩",
  INR: "₹",
  // Add more as needed
};

export const getCurrencySymbol = (currencyCode: string): string => {
  const upperCaseCode = currencyCode.toUpperCase();
  return currencySymbols[upperCaseCode] || currencyCode;
};
