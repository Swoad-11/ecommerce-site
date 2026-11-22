import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { getProductsByTag } from "../../../data/products";

const ProductSection = ({ tag, heading, subHeading }) => {
  const items = getProductsByTag(tag).slice(0, 4);
  return (
    <section className="mx-auto mb-12 w-full max-w-7xl px-4">
      <SectionTitle
        heading={heading}
        subHeading={subHeading}
        linkTo="/products"
      />
      <div className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 xl:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
