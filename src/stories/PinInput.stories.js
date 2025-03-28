import PinInput from "@/components/PinInput";

export default {
  title: "Components/Pin Component/Pin Input",
  component: PinInput,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "Green",
      values: [{ name: "Green", value: "#24c875" }],
    },
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    pinLength: 6,
    currentLength: 2,
  },
};
