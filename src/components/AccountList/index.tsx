import AccountCard from "./AccountCard";

interface Account {
  type: "smart-account" | "credit-loan" | "goal-saving-account";
  amount: number;
  currency: string;
  accountNumber: string;
  issuer: string;
  color: string;
  isMainAccount: boolean;
  progress?: number;
  flags?: string[];
  accountName: string;
}

const MockAccountList: Account[] = [
  {
    type: "smart-account",
    amount: 62000.0,
    currency: "THB",
    accountNumber: "568-2-81740-9",
    issuer: "TestLab",
    color: "#24c875",
    isMainAccount: true,
    accountName: "Saving Account",
  },
  {
    type: "credit-loan",
    amount: 300.1,
    currency: "THB",
    accountNumber: "568-2-81740-9",
    issuer: "TestLab",
    color: "#9366ed",
    isMainAccount: false,
    accountName: "Credit Loan",
  },
  {
    type: "goal-saving-account",
    amount: 30000.0,
    currency: "THB",
    accountNumber: "568-2-81740-9",
    issuer: "TestLab",
    progress: 24,
    color: "#00a1e2",
    isMainAccount: false,
    accountName: "Travel New York",
  },
  {
    type: "credit-loan",
    amount: 30000.0,
    currency: "THB",
    accountNumber: "568-2-81740-9",
    issuer: "TestLab",
    flags: ["Disbursement", "Overdue"],
    color: "#15bbc7",
    isMainAccount: false,
    accountName: "Need to repay",
  },
];

interface AccountListProps {
  accounts?: Account[];
}

const AccountList = ({ accounts = MockAccountList }: AccountListProps) => {
  return (
    <div>
      {accounts.map((account, index) => (
        <AccountCard key={index} account={account} />
      ))}
    </div>
  );
};

export default AccountList;
