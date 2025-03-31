import { useAppSelector } from "@/redux/hook";
import AccountCard from "./AccountCard";
import { selectAccounts } from "@/redux/features/accounts/selectors";

const AccountList = () => {
  const accounts = useAppSelector(selectAccounts);

  return (
    <div>
      {accounts.map((account, index) => (
        <AccountCard key={index} account={account} />
      ))}
    </div>
  );
};

export default AccountList;
