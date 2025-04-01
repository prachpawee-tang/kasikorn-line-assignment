interface Banner {
  image: string;
  title: string;
  description: string;
}

interface BannerProps {
  banner: Banner;
}

const Banner = ({ banner }: BannerProps) => {
  return (
    <a href="#" className="main-prod">
      <span className="main-prod__cms-ico">
        <img src={banner.image} alt={banner.title} />
      </span>
      <strong className="main-prod__tit">{banner.title}</strong>
      <p className="main-prod__dsc">{banner.description}</p>
    </a>
  );
};

export default Banner;
