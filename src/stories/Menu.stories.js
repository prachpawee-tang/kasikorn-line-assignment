import Menu from "@/components/Menu";

export default {
  title: "Components/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "Light",
    },
  },
  tags: ["autodocs"],
};

const args = {
  items: [
    { label: "Set Main Account", action: () => {} },
    { label: "Copy account number", action: () => {} },
    { label: "Edit Name and Color", action: () => {} },
  ],
  tip: "Change your main account for Using transfer, Wallet more easily",
};

export const Default = () => (
  <div className="wrap">
    <div className="main-acc is-small">
      <Menu {...args} />
    </div>
  </div>
);

export const Small = () => (
  <div className="wrap">
    <div className="main-acc is-small">
      <Menu size="small" {...args} />
    </div>
  </div>
);
