import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import {
  selectCartDetails,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../../redux/slices/cartSlice";
import { emptyCart } from "../../assets";
import { formatPrice } from "../../data/products";
import QuantityControl from "../../components/QuantityControl/QuantityControl";
import EmptyState from "../../components/EmptyState/EmptyState";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const Cart = () => {
  const dispatch = useDispatch();
  const { lines, subtotal, shipping, total } = useSelector(selectCartDetails);

  if (!lines.length) {
    return (
      <div className="px-4">
        <title>Your Cart | TechShop</title>
        <EmptyState
          image={emptyCart}
          title="Your cart is empty"
          message="Looks like you haven't added anything yet."
          actionLabel="Start shopping"
          actionTo="/products"
        />
      </div>
    );
  }

  const handleRemove = (line) => {
    dispatch(removeFromCart(line.id));
    toast(`Removed ${line.name}`);
  };

  const handleClear = () => {
    if (window.confirm("Remove all items from your cart?")) {
      dispatch(clearCart());
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <title>Your Cart | TechShop</title>
      <Breadcrumbs items={[{ label: "Cart" }]} />
      <h1 className="mb-6 text-2xl font-bold text-[#33475b]">
        Shopping Cart ({lines.length})
      </h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <section className="lg:col-span-2">
          <ul className="divide-y divide-gray-200 rounded-lg bg-white shadow-sm">
            {lines.map((line) => (
              <li key={line.id} className="flex gap-4 p-4">
                <Link to={`/product/${line.slug}`} className="shrink-0">
                  <img
                    src={line.img}
                    alt={line.name}
                    className="h-24 w-24 rounded object-contain"
                  />
                </Link>
                <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <Link
                      to={`/product/${line.slug}`}
                      className="line-clamp-2 font-semibold text-gray-800 hover:text-blue-700"
                    >
                      {line.name}
                    </Link>
                    <p className="text-sm text-gray-500">
                      {formatPrice(line.price)} each
                    </p>
                    {line.quantity >= line.stock && (
                      <p className="text-xs text-amber-700">
                        Max available quantity
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <QuantityControl
                      value={line.quantity}
                      max={line.stock}
                      onDecrease={() => dispatch(decreaseQuantity(line.id))}
                      onIncrease={() => dispatch(increaseQuantity(line.id))}
                    />
                    <span className="w-24 text-right font-semibold">
                      {formatPrice(line.price * line.quantity)}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemove(line)}
                      aria-label={`Remove ${line.name}`}
                      className="text-gray-400 hover:text-red-600"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between">
            <Link to="/products" className="btn btn-ghost btn-sm">
              ← Continue shopping
            </Link>
            <button
              type="button"
              onClick={handleClear}
              className="btn btn-ghost btn-sm text-red-600"
            >
              Clear cart
            </button>
          </div>
        </section>

        <OrderSummary subtotal={subtotal} shipping={shipping} total={total}>
          <Link to="/checkout" className="btn btn-neutral mt-4 w-full">
            Proceed to checkout
          </Link>
        </OrderSummary>
      </div>
    </div>
  );
};

export default Cart;
