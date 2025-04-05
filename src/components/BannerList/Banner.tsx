import { Banner as BannerTypes } from "@/types";

const Banner = ({ banner }: { banner: BannerTypes }) => {
  return (
    <a href="#" className="main-prod" data-testid="banner">
      <span className="main-prod__cms-ico">
        <img src={banner.image} alt={banner.title} />
      </span>
      <strong className="main-prod__tit">{banner.title}</strong>
      <p className="main-prod__dsc">{banner.description}</p>
    </a>
  );
};

export default Banner;
