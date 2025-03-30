import MainPage from "@/app/page.js";
import { expect, userEvent, within } from "@storybook/test";

export default {
  title: "Pages/Main",
  component: MainPage,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = {};
