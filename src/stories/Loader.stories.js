import Loader from "@/components/loader";

export default {
  title: "Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = () => <Loader />;
