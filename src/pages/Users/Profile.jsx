import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  logout,
  selectCurrentUser,
  updateProfile,
} from "../../redux/slices/authSlice";
import { selectOrders } from "../../redux/slices/ordersSlice";
import { formatPrice } from "../../data/products";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const allOrders = useSelector(selectOrders);
  const orders = useMemo(
    () => allOrders.filter((o) => o.userId === user.id),
    [allOrders, user.id]
  );

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: user.name,
    phone: user.phone ?? "",
    address: user.address ?? "",
    city: user.city ?? "",
  });

  const handleSave = (e) => {
    e.preventDefault();
    if (form.name.trim().length < 2) {
      toast.error("Name is too short");
      return;
    }
    dispatch(updateProfile({ ...form, name: form.name.trim() }));
    setEditing(false);
    toast.success("Profile updated");
  };

  const handleLogout = () => {
    dispatch(logout());
    toast("Logged out");
    navigate("/");
  };

  const fields = [
    ["name", "Name"],
    ["phone", "Phone"],
    ["address", "Address"],
    ["city", "City"],
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <title>My Account | TechShop</title>
      <Breadcrumbs items={[{ label: "My account" }]} />
      <div className="grid gap-8 lg:grid-cols-3">
        <section className="h-fit rounded-lg bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#33475b] text-xl font-bold text-white">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
              <h1 className="truncate text-xl font-bold">{user.name}</h1>
              <p className="truncate text-sm text-gray-500">{user.email}</p>
            </div>
          </div>

          {editing ? (
            <form onSubmit={handleSave} className="space-y-3">
              {fields.map(([key, label]) => (
                <label key={key} className="block text-sm">
                  <span className="mb-1 block text-gray-600">{label}</span>
                  <input
                    value={form[key]}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, [key]: e.target.value }))
                    }
                    className="input input-sm input-bordered w-full bg-white"
                  />
                </label>
              ))}
              <div className="flex gap-2 pt-2">
                <button type="submit" className="btn btn-sm btn-neutral">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-ghost"
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <dl className="space-y-2 text-sm">
                {fields.slice(1).map(([key, label]) => (
                  <div key={key}>
                    <dt className="text-gray-500">{label}</dt>
                    <dd>{user[key] || "—"}</dd>
                  </div>
                ))}
                <div>
                  <dt className="text-gray-500">Member since</dt>
                  <dd>{new Date(user.createdAt).toLocaleDateString()}</dd>
                </div>
              </dl>
              <div className="mt-6 flex gap-2">
                <button
                  type="button"
                  className="btn btn-sm btn-outline"
                  onClick={() => setEditing(true)}
                >
                  Edit profile
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-ghost text-red-600"
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </div>
            </>
          )}
        </section>

        <section className="lg:col-span-2">
          <h2 className="mb-4 text-xl font-semibold text-[#33475b]">
            Order history
          </h2>
          {orders.length ? (
            <ul className="space-y-4">
              {orders.map((order) => (
                <li key={order.id} className="rounded-lg bg-white p-5 shadow-sm">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="font-mono font-semibold">{order.id}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(order.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <span className="badge badge-warning">{order.status}</span>
                  </div>
                  <ul className="mb-3 flex flex-wrap gap-2">
                    {order.items.map((item) => (
                      <li key={item.id}>
                        <Link to={`/product/${item.slug}`} title={item.name}>
                          <img
                            src={item.img}
                            alt={item.name}
                            className="h-14 w-14 rounded border border-gray-100 object-contain"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {order.items.reduce((s, i) => s + i.quantity, 0)} item(s)
                    </span>
                    <span className="font-semibold">
                      {formatPrice(order.total)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-lg bg-white p-8 text-center text-gray-600 shadow-sm">
              <p>You haven&apos;t placed any orders yet.</p>
              <Link to="/products" className="btn btn-neutral btn-sm mt-4">
                Start shopping
              </Link>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Profile;
