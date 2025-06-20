import Banner from "../Banner/Banner";
import BestSellers from "../BestSellers/BestSellers";
import Category from "../Category/Category";
import OfferBanner from "../OfferBanner/OfferBanner";
import ShopByBrands from "../ShopByBrands/ShopByBrands";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import UpSection from "../UpSection/UpSection";
import YearProduct from "../YearProduct/YearProduct";

const Home = () => {
  return (
    <>
      <title>TechShop | Home</title>
      <div className="flex max-[1024px]:flex-col gap-8 mb-8 m-auto pt-16 max-[1024px]:pb-0 items-center mx-4">
        <div className="basis-3/4">
          <Banner />
        </div>
        <div className="basis-1/4 rounded shadow-sm">
          <ShopByBrands />
        </div>
      </div>
      <div className="max-[860px]:hidden">
        <UpSection />
      </div>
      <Category />
      <BestSellers />
      <OfferBanner />
      <SpecialOffers />
      <YearProduct />
    </>
  );
};

export default Home;
