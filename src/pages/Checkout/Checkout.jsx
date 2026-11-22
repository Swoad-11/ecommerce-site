import { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { selectCartDetails, clearCart } from "../../redux/slices/cartSlice";
import { selectCurrentUser, updateProfile } from "../../redux/slices/authSlice";
import { placeOrder } from "../../redux/slices/ordersSlice";
import { formatPrice } from "../../data/products";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const PAYMENT_METHODS = [
  {
    value: "cod",
    label: "Cash on delivery",
    hint: "Pay in cash when your order arrives.",
  },
  {
    value: "online",
    label: "Online payment (demo)",
    hint: "This is a portfolio demo. No real payment is taken.",
  },
];

const validate = (form) => {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = "Enter your full name.";
  if (!/^\+?[\d\s-]{7,15}$/.test(form.phone.trim()))
    errors.phone = "Enter a valid phone number.";
  if (form.address.trim().length < 5) errors.address = "Enter your street address.";
  if (!form.city.trim()) errors.city = "Enter your city.";
  if (!/^[A-Za-z0-9\s-]{3,10}$/.test(form.postalCode.trim()))
    errors.postalCode = "Enter a valid postal code.";
  return errors;
};

const Field = ({ label, name, form, errors, onChange, type = "text", ...rest }) => (
  <div className="w-full">
    <label htmlFor={`checkout-${name}`} className="mb-1 block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      id={`checkout-${name}`}
      type={type}
      name={name}
      value={form[name]}
      onChange={onChange}
      aria-invalid={!!errors[name]}
      aria-describedby={errors[name] ? `${name}-error` : undefined}
      className={`input input-bordered w-full bg-white ${errors[name] ? "input-error" : ""}`}
      {...rest}
    />
    {errors[name] && (
      <span id={`${name}-error`} className="mt-1 block text-xs text-red-600">
        {errors[name]}
      </span>
    )}
  </div>
);

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const { lines, subtotal, shipping, total } = useSelector(selectCartDetails);
  const placed = useRef(false);

  const [form, setForm] = useState({
    name: user.name ?? "",
    phone: user.phone ?? "",
    address: user.address ?? "",
    city: user.city ?? "",
    postalCode: user.postalCode ?? "",
    notes: "",
    payment: "cod",
    saveAddress: true,
  });
  const [errors, setErrors] = useState({});

  if (!lines.length && !placed.current) return <Navigate to="/cart" replace />;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) {
      toast.error("Please fix the highlighted fields");
      return;
    }
    const shippingAddress = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      address: form.address.trim(),
      city: form.city.trim(),
      postalCode: form.postalCode.trim(),
    };
    const action = dispatch(
      placeOrder({
        userId: user.id,
        items: lines.map(({ id, slug, name, img, price, quantity }) => ({
          id,
          slug,
          name,
          img,
          price,
          quantity,
        })),
        subtotal,
        shipping,
        total,
        shippingAddress,
        notes: form.notes.trim(),
        payment: form.payment,
      })
    );
    if (form.saveAddress) {
      const { name: _name, ...address } = shippingAddress; // eslint-disable-line no-unused-vars
      dispatch(updateProfile(address));
    }
    placed.current = true;
    dispatch(clearCart());
    navigate(`/order-success/${action.payload.id}`, { replace: true });
  };

  const fieldProps = { form, errors, onChange: handleChange };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <title>Checkout | TechShop</title>
      <Breadcrumbs items={[{ label: "Cart", to: "/cart" }, { label: "Checkout" }]} />
      <h1 className="mb-6 text-2xl font-bold text-[#33475b]">Checkout</h1>

      <form onSubmit={handleSubmit} noValidate className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <section className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">Shipping details</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" name="name" autoComplete="name" {...fieldProps} />
              <Field
                label="Phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                {...fieldProps}
              />
              <div className="sm:col-span-2">
                <Field
                  label="Street address"
                  name="address"
                  autoComplete="street-address"
                  {...fieldProps}
                />
              </div>
              <Field label="City" name="city" autoComplete="address-level2" {...fieldProps} />
              <Field
                label="Postal code"
                name="postalCode"
                autoComplete="postal-code"
                {...fieldProps}
              />
              <label className="sm:col-span-2">
                <span className="mb-1 block text-sm font-medium text-gray-700">
                  Order notes (optional)
                </span>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={2}
                  className="textarea textarea-bordered w-full bg-white"
                  placeholder="Delivery instructions, landmarks…"
                />
              </label>
              <label className="flex items-center gap-2 text-sm sm:col-span-2">
                <input
                  type="checkbox"
                  name="saveAddress"
                  checked={form.saveAddress}
                  onChange={handleChange}
                  className="checkbox checkbox-sm"
                />
                Save this address to my profile
              </label>
            </div>
          </section>

          <fieldset className="rounded-lg bg-white p-6 shadow-sm">
            <legend className="float-left mb-4 w-full text-lg font-semibold">
              Payment method
            </legend>
            <div className="clear-both space-y-3">
              {PAYMENT_METHODS.map((m) => (
                <label
                  key={m.value}
                  className={`flex cursor-pointer items-start gap-3 rounded-md border p-4 ${form.payment === m.value ? "border-blue-600 bg-blue-50" : "border-gray-200"}`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={m.value}
                    checked={form.payment === m.value}
                    onChange={handleChange}
                    className="radio radio-sm mt-0.5"
                  />
                  <span>
                    <span className="block font-medium">{m.label}</span>
                    <span className="text-sm text-gray-500">{m.hint}</span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <OrderSummary subtotal={subtotal} shipping={shipping} total={total}>
          <ul className="my-4 space-y-2 border-t border-gray-200 pt-4 text-sm">
            {lines.map((l) => (
              <li key={l.id} className="flex justify-between gap-2">
                <span className="line-clamp-1 text-gray-600">
                  {l.quantity} × {l.name}
                </span>
                <span>{formatPrice(l.price * l.quantity)}</span>
              </li>
            ))}
          </ul>
          <button type="submit" className="btn btn-neutral w-full">
            Place order · {formatPrice(total)}
          </button>
        </OrderSummary>
      </form>
    </div>
  );
};

export default Checkout;
