import React, { useState } from "react";
import AccountInfo from "./AccountInfo";
import AccountActions from "./AccountAction";
import Menu from "../Menu";

const MainAccountCard = () => {
  return (
    <div className="main-acc main-acc--large main-loading main-loading--order3">
      <AccountInfo />
      <div className="main-acc__bottom">
        <AccountActions />
      </div>

      <Menu
        items={[
          { label: "Set as Main Account", action: () => {} },
          { label: "Copy account number", action: () => {} },
          { label: "Edit Name and Color", action: () => {} },
        ]}
        tip="Change your main account for Using transfer, Wallet more easily"
      />
    </div>
  );
};

export default MainAccountCard;
