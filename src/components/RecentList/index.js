import RecentListItem from "./RecentItem";

const RecentList = () => {
  const recentItems = [
    {
      name: "Emily",
      imgSrc: "https://dummyimage.com/54x54/999/fff",
      isBank: false,
    },
    {
      name: "AbcdEfghiJKlmN",
      imgSrc: "https://dummyimage.com/54x54/999/fff",
      isBank: true,
    },
    {
      name: "Jone Kiersten",
      imgSrc: "https://dummyimage.com/54x54/999/fff",
      isBank: false,
    },
    {
      name: "Emily",
      imgSrc: "https://dummyimage.com/54x54/999/fff",
      isBank: false,
    },
    {
      name: "Emily",
      imgSrc: "https://dummyimage.com/54x54/999/fff",
      isBank: false,
    },
    {
      name: "MarkYu Gonzales",
      imgSrc: "https://dummyimage.com/54x54/999/fff",
      isBank: true,
    },
  ];

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
