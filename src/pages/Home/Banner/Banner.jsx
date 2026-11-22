import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { img1, img2, img3 } from "../../../assets/index";

const slides = [
  { img: img1, alt: "Discount on app orders", to: "/products" },
  { img: img2, alt: "Deals on home appliances", to: "/products" },
  { img: img3, alt: "Laptop deals", to: "/products?category=laptop" },
];

const Banner = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={5000}
      emulateTouch
    >
      {slides.map((slide) => (
        <Link key={slide.alt} to={slide.to} className="block">
          <img src={slide.img} alt={slide.alt} className="w-full" />
        </Link>
      ))}
    </Carousel>
  );
};

export default Banner;
