import { offerBanner } from "../../../assets";
const OfferBanner = () => {
  return (
    <div className="mb-12 flex justify-center items-center">
      <img className="rounded-[4px]" src={offerBanner} alt="offer-banner" />
    </div>
  );
};

export default OfferBanner;
