import Splash from "@/app/splash/page";
import { expect, userEvent, within } from "@storybook/test";

export default {
  title: "Pages/Splash",
  component: Splash,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = {};
