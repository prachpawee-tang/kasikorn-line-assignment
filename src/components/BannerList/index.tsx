import { useAppSelector } from "@/redux/hook";
import Banner from "./Banner";

const BannerList = () => {
  const banners = useAppSelector((state) => state.banners.banners);

  return (
    <div className="banner-list">
      {banners?.map((banner, index) => (
        <Banner banner={banner} key={`banner-${index}`} />
      ))}
    </div>
  );
};

export default BannerList;
