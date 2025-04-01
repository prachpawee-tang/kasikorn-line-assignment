import RecentListItem from "@/components/RecentList/RecentItem";

export default {
  title: "Components/Main/Recent Item",
  component: RecentListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    name: "TestLab",
    image: "https://dummyimage.com/54x54/999/fff",
    isBank: true,
  },
};
