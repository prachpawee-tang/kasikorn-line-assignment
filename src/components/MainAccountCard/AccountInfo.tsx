import { Account } from "@/types";
import { getCurrencySymbol } from "@/utils/currencySymbol";

const AccountInfo = ({ info }: { info: Account }) => (
  <div className="main-acc__top">
    <h2 className="main-acc__name">{info.accountName}</h2>
    <span className="main-acc__amount">
      {getCurrencySymbol(info.currency)}
      {info.amount.toLocaleString()}
    </span>
    <span className="main-acc__detail main-acc__detail--num">
      {info.type} {info.accountNumber}
    </span>
    <span className="main-acc__detail">Powered by {info.issuer}</span>
  </div>
);

export default AccountInfo;
