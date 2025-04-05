export interface Account {
  type: "smart-account" | "credit-loan" | "goal-saving-account";
  color: string;
  currency: string;
  amount: number;
  accountNumber: string;
  flags?: string[];
  issuer?: string;
  progress?: number;
  accountName: string;
}
