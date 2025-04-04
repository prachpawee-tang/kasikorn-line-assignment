import React from "react";
import AccountInfo from "./AccountInfo";
import AccountActions from "./AccountAction";
import Menu from "../Menu";
import { useAppSelector } from "@/redux/hook";
import { selectMainAccount } from "@/redux/features/accounts/selectors";

const MainAccountCard = () => {
  const mainAccount = useAppSelector(selectMainAccount);

  if (!mainAccount) {
    return null;
  }

  return (
    <div
      className="main-acc main-acc--large main-loading main-loading--order3"
      data-testid="main-account"
    >
      <AccountInfo info={mainAccount} />
      <AccountActions />

      <Menu
        items={[
          { label: "Set Main Account", action: () => {} },
          { label: "Copy account number", action: () => {} },
          { label: "Edit Name and Color", action: () => {} },
        ]}
        tip="Change your main account for Using transfer, Wallet more easily"
      />
    </div>
  );
};

export default MainAccountCard;
