import { useAppSelector } from "@/redux/hook";
import RecentListItem from "./RecentItem";

const RecentList = () => {
  const recentItems = useAppSelector((state) => state.transactions.recents);

  return (
    <div className="rctly__wrap main-loading main-loading--order5">
      <RecentListItems items={recentItems} />
    </div>
  );
};

const RecentListItems = ({ items }) => {
  return (
    <ul className="rctly__lst">
      {items.map((item, index) => (
        <RecentListItem key={index} {...item} />
      ))}
    </ul>
  );
};

export default RecentList;
