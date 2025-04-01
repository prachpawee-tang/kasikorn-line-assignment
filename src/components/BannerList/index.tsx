import { useAppSelector } from "@/redux/hook";

const BannerList = () => {
  const banners = useAppSelector((state) => state.banners.banners);

  return (
    <div className="banner-list">
      {banners?.map((banner, index) => (
        <a href="#" className="main-prod" key={index}>
          <span className="main-prod__cms-ico">
            <img src={banner.image} alt={banner.title} />
          </span>
          <strong className="main-prod__tit">{banner.title}</strong>
          <p className="main-prod__dsc">{banner.description}</p>
        </a>
      ))}
    </div>
  );
};

export default BannerList;
