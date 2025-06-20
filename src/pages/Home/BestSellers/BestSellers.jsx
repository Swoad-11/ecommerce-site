import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/index";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ProductCard from "../../../components/ProductCard/ProductCard";

const BestSellers = () => {
  return (
    <div className="w-full mb-12 px-4">
      <SectionTitle
        subHeading={"Check & Get Your Desired Product!"}
        heading={"Best Seller"}
      />

      <div className="w-full grid grid-cols-2 md:grid-cols-2 max-[495px]:grid-cols-1 xl:grid-cols-4 gap-10 justify-items-center">
        <ProductCard
          _id="1011"
          img={bestSellerOne}
          productName="Fantech MARS II HQ54 Wired Gaming Headset"
          price="35.00"
          stock="5"
          size="100"
          color="Blank and White"
          brand="Fantech"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <ProductCard
          _id="1012"
          img={bestSellerTwo}
          productName="Pico Neo 3 8GB RAM 256GB ROM All-In-One VR Headset"
          price="180.00"
          color="Gray"
          brand="Pico"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <ProductCard
          _id="1013"
          img={bestSellerThree}
          productName="DJ1 Dual Battery Folding Camera Toy Drone"
          price="25.00"
          color="Mixed"
          brand="DJI"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <ProductCard
          _id="1014"
          img={bestSellerFour}
          productName="InFocus INF8650 86-inch 4K Interactive Touch Display"
          price="220.00"
          color="Black"
          brand="InFocus"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default BestSellers;
