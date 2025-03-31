interface Account {
  type: string;
  amount: number;
  currency: string;
  accountNumber: string;
  issuer: string;
  color: string;
  isMainAccount: boolean;
  accountName: string;
}

interface AccountInfoProps {
  info: Account;
}

const AccountInfo = ({ info }: AccountInfoProps) => (
  <div className="main-acc__top">
    <h2 className="main-acc__name">{info.accountName}</h2>
    <span className="main-acc__amount">
      {info.currency} {info.amount.toLocaleString()}
    </span>
    <span className="main-acc__detail main-acc__detail--num">
      {info.type} {info.accountNumber}
    </span>
    <span className="main-acc__detail">Powered by {info.issuer}</span>
  </div>
);

export default AccountInfo;
