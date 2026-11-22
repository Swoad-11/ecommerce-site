import { formatPrice } from "../../data/products";
import { FREE_SHIPPING_THRESHOLD } from "../../redux/slices/cartSlice";

const OrderSummary = ({ subtotal, shipping, total, children }) => {
  const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
  return (
    <aside className="h-fit rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">Order summary</h2>
      <dl className="space-y-2 text-sm">
        <div className="flex justify-between">
          <dt className="text-gray-600">Subtotal</dt>
          <dd>{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-gray-600">Shipping</dt>
          <dd>{shipping === 0 ? "Free" : formatPrice(shipping)}</dd>
        </div>
        <div className="flex justify-between border-t border-gray-200 pt-2 text-base font-semibold">
          <dt>Total</dt>
          <dd>{formatPrice(total)}</dd>
        </div>
      </dl>
      {remaining > 0 && (
        <p className="mt-3 rounded bg-blue-50 p-2 text-xs text-blue-800">
          Add {formatPrice(remaining)} more for free shipping.
        </p>
      )}
      {children}
    </aside>
  );
};

export default OrderSummary;
