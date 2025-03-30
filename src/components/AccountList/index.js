import AccountCard from "./AccountCard";

const MockAccountList = [
  {
    type: "saving-account",
    amount: 62000.0,
    currency: "THB",
    accountNumber: "568-2-81740-9",
    issuer: "TestLab",
    color: "#24c875",
    isMainAccount: true,
  },
  {
    type: "credit-loan",
    amount: 300.1,
    currency: "THB",
    accountNumber: "568-2-81740-9",
    issuer: "TestLab",
    color: "#9366ed",
    isMainAccount: false,
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
  },
];

const AccountList = ({ accounts = MockAccountList }) => {
  return (
    <div>
      {accounts.map((account, index) => (
        <AccountCard key={index} account={account} />
      ))}
    </div>
  );
};

export default AccountList;
