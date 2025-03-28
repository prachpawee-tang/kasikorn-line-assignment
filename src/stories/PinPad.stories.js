import PinPad from "@/components/PinPad";
import { fn } from "@storybook/test";

export default {
  title: "Components/Pin Component/Pin Pad",
  component: PinPad,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "Green",
      values: [{ name: "Green", value: "#24c875" }],
    },
  },
  args: {
    onKeyPress: fn(),
    onDelete: fn(),
  },
  tags: ["autodocs"],
};

export const Default = {};
