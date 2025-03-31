import React from "react";
import Menu from "../Menu";

type AccountFlag = string;

interface Account {
  type: "smart-account" | "credit-loan" | "goal-saving-account";
  color: string;
  currency: string;
  amount: number;
  accountNumber: string;
  flags?: AccountFlag[];
  issuer?: string;
  progress?: number;
  accountName: string;
}

interface AccountCardProps {
  account: Account;
}

const AccountCard = ({ account }: AccountCardProps) => {
  return (
    <div
      className="main-acc is-small"
      style={{ backgroundColor: account.color }}
    >
      <div className="main-acc__top">
        <h2 className="main-acc__name">{account.accountName}</h2>
        <span className="main-acc__amount">
          {account.currency} {account.amount.toLocaleString()}
        </span>
        {account.flags &&
          account.flags.map((flag) => (
            <span key={flag} className="main-acc__flag">
              {flag}
            </span>
          ))}
      </div>
      <div className="main-acc__bottom">
        <span className="main-acc__detail">
          {account.type.replace("-", " ")} {account.accountNumber}
        </span>
        {account.issuer && (
          <span className="main-acc__detail">Powered by {account.issuer}</span>
        )}
      </div>

      <Menu
        items={[
          { label: "Copy account number", action: () => {} },
          { label: "Edit Name and Color", action: () => {} },
        ]}
        size="small"
      />

      {account.type === "goal-saving-account" &&
        account.progress !== undefined && (
          <div className="main-acc__circle">
            <svg
              className="graph-bar"
              width="100%"
              height="100%"
              viewBox="0 0 42 42"
            >
              <circle
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke="rgba(0,0,0,0.07)"
                strokeWidth="1.5"
              ></circle>
              <circle
                className="gauge"
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDashoffset="25"
                style={{
                  strokeDasharray: `${account.progress} ${
                    100 - account.progress
                  }`,
                }}
              ></circle>
            </svg>
            <div className="main-acc__num">
              <span className="percent">{account.progress}</span>
              <span className="unit">%</span>
            </div>
          </div>
        )}
      {/* {account.type === "smart-account" && (
        <a href="#" className="main-acc__act main-acc__act--money">
          <span className="blind">Add money</span>
        </a>
      )}
      {account.type === "credit-loan" && (
        <a href="#" className="main-acc__act main-acc__act--pay">
          <span className="blind">Pay</span>
        </a>
      )} */}
    </div>
  );
};

export default AccountCard;
