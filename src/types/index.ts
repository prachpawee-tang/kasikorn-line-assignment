export interface DebitCard {
  number?: string;
  color: string;
  name: string;
  issuer: string;
  status: "active" | "in-progress";
  borderColor?: string;
}
