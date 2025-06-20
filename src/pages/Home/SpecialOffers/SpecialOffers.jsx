import { spfOne, spfTwo, spfThree, spfFour } from "../../../assets/index";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ProductCard from "../../../components/ProductCard/ProductCard";

const SpecialOffers = () => {
  return (
    <div className="w-full mb-12 px-4">
      <SectionTitle
        heading={"Special Offers"}
        subHeading={"Exclusive Offers Just for You"}
      />
      <div className="w-full grid grid-cols-2 md:grid-cols-2 max-[495px]:grid-cols-1 xl:grid-cols-4 gap-10 justify-items-center">
        <ProductCard
          _id="1101"
          img={spfOne}
          productName="A4tech Bloody M590i Gaming Headphone"
          price="35.00"
          color="Blank and White"
          brand="A4tech"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <ProductCard
          _id="1102"
          img={spfTwo}
          productName="PS4 Dualshock 4 Wireless Controller Steel Glacier White"
          price="180.00"
          color="Gray"
          brand="Microsoft"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <ProductCard
          _id="1103"
          img={spfThree}
          productName="Mibro Watch GS GPS Sports Smart Watch"
          price="25.00"
          color="Mixed"
          brand="Mibro"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <ProductCard
          _id="1104"
          img={spfFour}
          productName="Hoco HC9 Dazzling Pulse Wireless Bluetooth Speaker"
          price="220.00"
          color="Black"
          brand="Hoco"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
