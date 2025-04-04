interface RecentListItemProps {
  name: string;
  image: string;
  isBank: boolean;
  link?: string;
}

const RecentListItem = ({
  name,
  image,
  isBank,
  link = "#",
}: RecentListItemProps) => {
  return (
    <li className="rctly__item" data-testid="recent-item">
      <a href={link} className="rctly__link">
        <span className={`rctly__thumb ${isBank ? "is-bank" : ""}`}>
          <img src={image} alt="" role="img" />
        </span>
        <span className="rctly__name">{name}</span>
      </a>
    </li>
  );
};

export default RecentListItem;
