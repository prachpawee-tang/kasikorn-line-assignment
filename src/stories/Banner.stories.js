import Banner from "@/components/BannerList/Banner";

export default {
  title: "Components/Main/Banner",
  component: Banner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    banner: {
      title: "Want some money?",
      description: "You can start apply 'Clare'",
      image: "https://dummyimage.com/54x54/999/fff",
    },
  },
};
