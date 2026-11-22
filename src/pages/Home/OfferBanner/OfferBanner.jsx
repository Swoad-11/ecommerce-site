import { Link } from "react-router-dom";
import { offerBanner } from "../../../assets";

const OfferBanner = () => {
  return (
    <div className="mx-auto mb-12 flex max-w-7xl justify-center px-4">
      <Link to="/products" className="block overflow-hidden rounded">
        <img src={offerBanner} alt="Special offers this month" loading="lazy" />
      </Link>
    </div>
  );
};

export default OfferBanner;
