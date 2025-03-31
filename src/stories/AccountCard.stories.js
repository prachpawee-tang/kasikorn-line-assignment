import AccountCard from "@/components/AccountList/AccountCard";
import "@/styles/th-bank.css";

export default {
  title: "Components/Main/Account Card",
  component: AccountCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    account: {
      color: "green",
    },
  },
};

export const Default = {
  args: {
    account: {
      type: "saving-account",
      amount: 62000.0,
      currency: "THB",
      accountNumber: "568-2-81740-9",
      issuer: "TestLab",
      color: "#24c875",
      isMainAccount: true,
    },
  },
};

export const NonMain = {
  args: {
    account: {
      type: "credit-loan",
      amount: 300.1,
      currency: "THB",
      accountNumber: "568-2-81740-9",
      issuer: "TestLab",
      color: "#9366ed",
      isMainAccount: false,
    },
  },
};

export const CardWithProgress = {
  args: {
    account: {
      type: "goal-saving-account",
      amount: 30000.0,
      currency: "THB",
      accountNumber: "568-2-81740-9",
      issuer: "TestLab",
      progress: 24,
      color: "#00a1e2",
      isMainAccount: false,
    },
  },
};

export const CardWithFlags = {
  args: {
    account: {
      type: "credit-loan",
      amount: 30000.0,
      currency: "THB",
      accountNumber: "568-2-81740-9",
      issuer: "TestLab",
      flags: ["Disbursement", "Overdue"],
      color: "#15bbc7",
      isMainAccount: false,
    },
  },
};
