import { Link } from "react-router-dom";
import { featuredBrands } from "../../../data/catalog";

const ShopByBrands = () => {
  return (
    <div className="flex h-full flex-col items-center rounded-lg bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-lg font-bold uppercase text-gray-600">
        Shop by Brands
      </h2>
      <div className="grid grid-cols-3 gap-4 max-[1024px]:grid-cols-9 max-[768px]:grid-cols-6 max-[500px]:grid-cols-3">
        {featuredBrands.map(({ name, logo }) => (
          <Link
            key={name}
            to={`/products?brand=${encodeURIComponent(name)}`}
            title={name}
            className="flex h-20 w-20 items-center justify-center rounded-lg bg-white p-3 shadow-md transition hover:shadow-lg hover:shadow-blue-200 max-[500px]:h-16 max-[500px]:w-16"
          >
            <img src={logo} alt={name} className="max-h-full max-w-full object-contain" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopByBrands;
