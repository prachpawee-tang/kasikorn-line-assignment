import DebitList from "@/components/DebitList";

export default {
  title: "Components/Main/Debit List",
  component: DebitList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {};

export const Empty = {
  args: {
    items: [],
  },
};
