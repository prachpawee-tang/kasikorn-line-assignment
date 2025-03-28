import PinPage from "@/pages/PinPage";
import { expect, userEvent, within } from "@storybook/test";

export default {
  title: "Pages/Pin",
  component: PinPage,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = {};
