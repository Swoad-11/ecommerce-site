import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import OfferBanner from "../OfferBanner/OfferBanner";
import ProductSection from "../ProductSection/ProductSection";
import ShopByBrands from "../ShopByBrands/ShopByBrands";
import UpSection from "../UpSection/UpSection";
import YearProduct from "../YearProduct/YearProduct";

const Home = () => {
  return (
    <>
      <title>TechShop | Gadgets, Laptops & Accessories</title>
      <div className="mx-auto mb-8 flex max-w-7xl items-stretch gap-6 px-4 pt-8 max-[1024px]:flex-col">
        <div className="basis-3/4 overflow-hidden rounded-lg">
          <Banner />
        </div>
        <div className="basis-1/4">
          <ShopByBrands />
        </div>
      </div>
      <UpSection />
      <Category />
      <ProductSection
        tag="bestSeller"
        heading="Best Sellers"
        subHeading="Check & get your desired product!"
      />
      <OfferBanner />
      <ProductSection
        tag="specialOffer"
        heading="Special Offers"
        subHeading="Exclusive offers just for you"
      />
      <ProductSection
        tag="new"
        heading="New Arrivals"
        subHeading="Fresh in this week"
      />
      <YearProduct />
    </>
  );
};

export default Home;
