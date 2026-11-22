import { Link } from "react-router-dom";
import { yearImg } from "../../../assets/index";

const YearProduct = () => {
  return (
    <section
      className="hero mb-12 min-h-[50vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${yearImg})` }}
    >
      <div className="hero-overlay bg-black/50"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold uppercase">Product of the year</h2>
          <p className="mb-5 uppercase text-yellow-400">
            Unmatched quality, unrivaled performance
          </p>
          <Link to="/products?sort=rating" className="btn glass text-white">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default YearProduct;
