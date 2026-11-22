import { Link, useNavigate } from "react-router-dom";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import Badge from "./Badge";
import Rating from "../Rating/Rating";
import useShopActions from "../../hooks/useShopActions";
import { discountPercent, formatPrice } from "../../data/products";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addItem, toggleWish, isWished } = useShopActions();
  const wished = isWished(product.id);
  const discount = discountPercent(product);
  const outOfStock = product.stock === 0;
  const url = `/product/${product.slug}`;

  const handleBuyNow = () => {
    if (addItem(product)) navigate("/cart");
  };

  return (
    <article className="group relative flex h-full w-full flex-col overflow-hidden rounded-md border border-gray-200 bg-white transition hover:shadow-lg hover:shadow-blue-200">
      <div className="relative">
        <Link to={url} className="block aspect-square overflow-hidden bg-white">
          <img
            className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-105"
            src={product.img}
            alt={product.name}
            loading="lazy"
          />
        </Link>
        <div className="absolute left-3 top-3 flex flex-col gap-1">
          {product.tags.includes("new") && <Badge text="New" />}
          {discount > 0 && <Badge text={`-${discount}%`} tone="sale" />}
          {outOfStock && <Badge text="Sold out" tone="muted" />}
        </div>
        <button
          type="button"
          onClick={() => toggleWish(product)}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wished}
          className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-lg shadow transition hover:scale-110"
        >
          {wished ? (
            <BsSuitHeartFill className="text-red-500" />
          ) : (
            <BsSuitHeart className="text-gray-600" />
          )}
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 border-t border-gray-100 bg-gray-50 px-4 py-4">
        <p className="text-xs uppercase tracking-wide text-gray-500">
          {product.brand}
        </p>
        <Link
          to={url}
          className="line-clamp-2 min-h-[2.5rem] text-sm font-semibold text-[#33475b] hover:text-blue-700"
        >
          {product.name}
        </Link>
        <Rating value={product.rating} />
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-semibold text-teal-700">
            {formatPrice(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>
        <div className="mt-auto flex gap-2 pt-2">
          <button
            type="button"
            onClick={() => addItem(product)}
            disabled={outOfStock}
            aria-label={`Add ${product.name} to cart`}
            className="rounded-md border border-gray-900 px-3 text-gray-900 transition hover:bg-gray-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <FaShoppingCart />
          </button>
          <button
            type="button"
            onClick={handleBuyNow}
            disabled={outOfStock}
            className="flex-1 rounded-md bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            {outOfStock ? "Out of stock" : "Buy Now"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
