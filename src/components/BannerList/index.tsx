import { useState, useEffect } from "react";

const MockBannerData = [
  {
    title: "Want some money?",
    description: "You can start apply 'Clare'",
    image: "https://dummyimage.com/54x54/999/fff",
  },
];

const BannerList = () => {
  const [banners, setBanners] = useState(MockBannerData);

  return (
    <div className="banner-list">
      {banners.map((banner, index) => (
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
