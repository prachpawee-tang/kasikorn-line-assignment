import DebitItem from "@/components/DebitList/DebitItem";

export default {
  title: "Components/Main/Debit Item",
  component: DebitItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    number: "9440 7878 9012 3115",
    color: "#91c9ee", // Light Blue
    name: "For My Dream",
    issuer: "TestLab",
  },
};

export const WhiteCard = {
  args: {
    number: "9440 7856 7890 3115",
    color: "#ffffff", // White
    name: "For My Dream",
    issuer: "TestLab",
    borderColor: "#f2f3f7",
    issuerColor: "#d3d3d2",
  },
};

export const InProgress = {
  args: {
    number: "9440 7834 5678 3115",
    color: "#ff8300", // Orange
    name: "For My Dream",
    issuer: "TestLab",
    status: "in-progress",
  },
};
