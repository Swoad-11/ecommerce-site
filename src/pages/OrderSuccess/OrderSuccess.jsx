import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOrderById } from "../../redux/slices/ordersSlice";
import { selectCurrentUser } from "../../redux/slices/authSlice";
import { successIcon } from "../../assets";
import { formatPrice } from "../../data/products";
import NotFound from "../NotFound/NotFound";

const OrderSuccess = () => {
  const { orderId } = useParams();
  const order = useSelector(selectOrderById(orderId));
  const user = useSelector(selectCurrentUser);

  if (!order || order.userId !== user?.id) {
    return <NotFound message="We couldn't find that order." />;
  }

  const { shippingAddress: addr } = order;

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <title>Order placed | TechShop</title>
      <div className="rounded-lg bg-white p-8 text-center shadow-sm">
        <img src={successIcon} alt="" className="mx-auto mb-4 w-20" />
        <h1 className="text-2xl font-bold text-[#33475b]">
          Thank you, your order is placed!
        </h1>
        <p className="mt-2 text-gray-600">
          Order <span className="font-mono font-semibold">{order.id}</span> ·{" "}
          {new Date(order.createdAt).toLocaleString()}
        </p>

        <ul className="my-6 divide-y divide-gray-100 text-left text-sm">
          {order.items.map((item) => (
            <li key={item.id} className="flex items-center gap-3 py-2">
              <img src={item.img} alt="" className="h-12 w-12 object-contain" />
              <span className="flex-1">
                {item.quantity} × {item.name}
              </span>
              <span>{formatPrice(item.price * item.quantity)}</span>
            </li>
          ))}
          <li className="flex justify-between py-2 font-semibold">
            <span>Total</span>
            <span>{formatPrice(order.total)}</span>
          </li>
        </ul>

        <div className="rounded bg-gray-50 p-4 text-left text-sm text-gray-700">
          <p className="font-semibold">Delivering to</p>
          <p>{addr.name}</p>
          <p>
            {addr.address}, {addr.city} {addr.postalCode}
          </p>
          <p>{addr.phone}</p>
          <p className="mt-2">
            Payment:{" "}
            {order.payment === "cod" ? "Cash on delivery" : "Online (demo)"}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/profile" className="btn btn-outline">
            View my orders
          </Link>
          <Link to="/products" className="btn btn-neutral">
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
