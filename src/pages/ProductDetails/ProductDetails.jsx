import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaShoppingCart, FaTruck, FaUndo, FaShieldAlt } from "react-icons/fa";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import {
  getProductBySlug,
  getRelatedProducts,
  discountPercent,
  formatPrice,
} from "../../data/products";
import { getCategoryLabel } from "../../data/catalog";
import useShopActions from "../../hooks/useShopActions";
import QuantityControl from "../../components/QuantityControl/QuantityControl";
import Rating from "../../components/Rating/Rating";
import ProductCard from "../../components/ProductCard/ProductCard";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import NotFound from "../NotFound/NotFound";

const ProductDetails = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  if (!product) return <NotFound message="We couldn't find that product." />;
  // key resets the quantity when moving between products
  return <ProductView key={product.id} product={product} />;
};

const ProductView = ({ product }) => {
  const navigate = useNavigate();
  const { addItem, toggleWish, isWished, inCartQty } = useShopActions();
  const [quantity, setQuantity] = useState(1);

  const wished = isWished(product.id);
  const discount = discountPercent(product);
  const outOfStock = product.stock === 0;
  const available = Math.max(product.stock - inCartQty(product.id), 0);
  const related = getRelatedProducts(product);

  const handleBuyNow = () => {
    if (addItem(product, quantity)) navigate("/cart");
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <title>{`${product.name} | TechShop`}</title>
      <Breadcrumbs
        items={[
          { label: "Products", to: "/products" },
          {
            label: getCategoryLabel(product.category),
            to: `/products?category=${product.category}`,
          },
          { label: product.name },
        ]}
      />

      <div className="grid grid-cols-1 gap-8 rounded-lg bg-white p-6 shadow-sm md:grid-cols-2 md:gap-12">
        <div className="relative flex items-center justify-center rounded-md bg-white">
          <img
            src={product.img}
            alt={product.name}
            className="max-h-[460px] w-full object-contain"
          />
          {discount > 0 && (
            <span className="absolute left-2 top-2 rounded bg-red-500 px-2.5 py-1 text-sm font-semibold text-white">
              -{discount}%
            </span>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-wide text-gray-500">
            {product.brand}
          </p>
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
            {product.name}
          </h1>
          <Rating value={product.rating} size="text-base" />

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-teal-700">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-lg text-gray-400 line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>

          <p className="text-gray-600">{product.description}</p>

          <p className="text-sm">
            {outOfStock ? (
              <span className="font-semibold text-red-600">Out of stock</span>
            ) : (
              <span className="font-semibold text-green-700">
                In stock: {product.stock} pc(s)
                {product.stock <= 5 && " (only a few left!)"}
              </span>
            )}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <QuantityControl
              value={quantity}
              max={Math.max(available, 1)}
              onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
              onIncrease={() =>
                setQuantity((q) => Math.min(Math.max(available, 1), q + 1))
              }
            />
            <button
              type="button"
              onClick={() => addItem(product, quantity)}
              disabled={outOfStock || available === 0}
              className="btn bg-blue-600 text-white hover:bg-blue-800 disabled:bg-gray-300"
            >
              <FaShoppingCart /> Add to cart
            </button>
            <button
              type="button"
              onClick={handleBuyNow}
              disabled={outOfStock || available === 0}
              className="btn btn-neutral"
            >
              Buy now
            </button>
            <button
              type="button"
              onClick={() => toggleWish(product)}
              aria-pressed={wished}
              aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
              className="btn btn-ghost btn-circle text-2xl"
            >
              {wished ? (
                <BsSuitHeartFill className="text-red-500" />
              ) : (
                <BsSuitHeart />
              )}
            </button>
          </div>
          {available === 0 && !outOfStock && (
            <p className="text-sm text-amber-700">
              You already have all available units in your{" "}
              <Link to="/cart" className="underline">
                cart
              </Link>
              .
            </p>
          )}

          <ul className="mt-2 grid gap-2 text-sm text-gray-600 sm:grid-cols-3">
            <li className="flex items-center gap-2">
              <FaTruck className="text-blue-700" /> Free shipping over $200
            </li>
            <li className="flex items-center gap-2">
              <FaUndo className="text-blue-700" /> 7-day returns
            </li>
            <li className="flex items-center gap-2">
              <FaShieldAlt className="text-blue-700" /> Official warranty
            </li>
          </ul>

          <div className="mt-2">
            <h2 className="mb-2 font-semibold text-gray-800">Specifications</h2>
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Brand", product.brand],
                  ["Category", getCategoryLabel(product.category)],
                  ["Color", product.color],
                  ...Object.entries(product.specs),
                ].map(([key, value]) => (
                  <tr key={key} className="border-b border-gray-100">
                    <th className="w-1/3 py-2 pr-4 text-left font-medium text-gray-500">
                      {key}
                    </th>
                    <td className="py-2 text-gray-800">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-[#33475b]">
          You may also like
        </h2>
        <div className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
