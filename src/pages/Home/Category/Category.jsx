import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { categories } from "../../../data/catalog";

const Category = () => {
  return (
    <section className="mx-auto mb-12 max-w-7xl px-4">
      <SectionTitle
        subHeading="Get your desired product from a featured category!"
        heading="Featured Category"
      />
      <div className="grid grid-cols-2 gap-4 min-[650px]:grid-cols-3 min-[700px]:grid-cols-4 min-[960px]:grid-cols-8">
        {categories.map(({ slug, label, icon }) => (
          <Link
            key={slug}
            to={`/products?category=${slug}`}
            className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200"
          >
            <img src={icon} alt="" width="48" height="48" />
            <span className="mt-2 text-center text-sm text-gray-600">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;
