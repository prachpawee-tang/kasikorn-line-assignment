import Header from "@/components/Header";
import "@/styles/th-bank.css";
import { fn } from "@storybook/test";

export default {
  title: "Components/Main/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onMenuClick: fn(),
    onCancelClick: fn(),
  },
};

export const Default = () => (
  <div class="wrap">
    <Header />
  </div>
);
