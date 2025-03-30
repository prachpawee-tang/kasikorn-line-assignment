import PinDot from "@/components/PinInput/PinDot";

export default {
  title: "Components/Pin Component/Pin Dot",
  component: PinDot,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "Green",
      values: [{ name: "Green", value: "#24c875" }],
    },
  },
  tags: ["autodocs"],
};

export const Default = {};

export const Filled = {
  args: {
    filled: true,
  },
};
