import PinKey from "@/components/PinPad/PinKey";
import { fn } from "@storybook/test";

export default {
  title: "Components/Pin Component/Pin Key",
  component: PinKey,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "Green",
      values: [{ name: "Green", value: "#24c875" }],
    },
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
};

export const Default = {
  args: {
    value: "2",
  },
};

export const Delete = {
  args: {
    isDel: true,
  },
};

export const Space = {
  args: {
    isSpace: true,
  },
};
