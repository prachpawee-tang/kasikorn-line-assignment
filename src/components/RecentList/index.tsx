import { useAppSelector } from "@/redux/hook";
import RecentListItem from "./RecentItem";

const RecentList = () => {
  const recentItems = useAppSelector((state) => state.transactions.recents);

  return (
    <div className="rctly__wrap main-loading main-loading--order5">
      <ul className="rctly__lst">
        {recentItems.map((item, index) => (
          <RecentListItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default RecentList;
