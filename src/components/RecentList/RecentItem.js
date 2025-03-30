const RecentListItem = ({ name, imgSrc, isBank, link = "#" }) => {
  return (
    <li className="rctly__item">
      <a href={link} className="rctly__link">
        <span className={`rctly__thumb ${isBank ? "is-bank" : ""}`}>
          <img src={imgSrc} alt="" />
        </span>
        <span className="rctly__name">{name}</span>
      </a>
    </li>
  );
};

export default RecentListItem;
