export interface DebitCard {
  name: string;
  status: "active" | "in-progress";
  issuer: string;
  color: string;
  borderColor?: string;
  number?: string;
}
