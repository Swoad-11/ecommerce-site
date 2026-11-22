import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { FaHeart, FaThList, FaHome, FaRegUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { logo } from "../../../assets/index";
import { selectCartCount } from "../../../redux/slices/cartSlice";
import { selectWishlistIds } from "../../../redux/slices/wishlistSlice";
import { logout, selectCurrentUser } from "../../../redux/slices/authSlice";

const CountBadge = ({ count }) =>
  count > 0 ? (
    <span className="absolute -right-2.5 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
      {count > 99 ? "99+" : count}
    </span>
  ) : null;

const SearchForm = ({ onSearch, className = "" }) => {
  const location = useLocation();
  const [term, setTerm] = useState(
    () => new URLSearchParams(location.search).get("q") ?? ""
  );
  return (
    <form
      role="search"
      className={`relative ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(term.trim());
      }}
    >
      <FaSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400" />
      <input
        type="search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        aria-label="Search products"
        placeholder="Search products…"
        className="block w-full rounded-lg border border-gray-300 bg-white p-2 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
    </form>
  );
};

const linkClass = ({ isActive }) =>
  `relative flex items-center gap-2.5 rounded px-2 py-2 md:p-0 ${
    isActive ? "font-semibold text-blue-700" : "text-gray-700 hover:text-blue-700"
  }`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const wishCount = useSelector(selectWishlistIds).length;
  const user = useSelector(selectCurrentUser);

  const close = () => setMenuOpen(false);

  const handleSearch = (term) => {
    navigate(term ? `/products?q=${encodeURIComponent(term)}` : "/products");
    close();
  };

  const handleLogout = () => {
    dispatch(logout());
    toast("Logged out");
    close();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 p-4">
        <Link to="/" onClick={close} className="flex items-center gap-3">
          <img src={logo} className="h-8" alt="" />
          <span className="whitespace-nowrap text-2xl font-semibold text-[#33475b]">
            TechShop
          </span>
        </Link>

        <SearchForm onSearch={handleSearch} className="hidden w-full max-w-[15rem] md:order-2 lg:block xl:max-w-xs" />

        <div className="flex items-center gap-4 md:hidden">
          <NavLink to="/cart" className={linkClass} aria-label="Cart">
            <FaShoppingCart className="text-lg" />
            <CountBadge count={cartCount} />
          </NavLink>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="rounded-lg p-2 text-2xl text-gray-600 hover:bg-gray-100"
            aria-controls="main-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <div
          id="main-menu"
          className={`${menuOpen ? "block" : "hidden"} w-full md:order-1 md:block md:w-auto`}
        >
          <SearchForm onSearch={handleSearch} className="mb-2 lg:hidden md:hidden" />
          <ul className="flex flex-col gap-1 font-medium md:flex-row md:items-center md:gap-5 xl:gap-7">
            <li>
              <NavLink to="/" end onClick={close} className={linkClass}>
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" onClick={close} className={linkClass}>
                <FaThList /> Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/wishlist" onClick={close} className={linkClass}>
                <span className="relative">
                  <FaHeart />
                  <CountBadge count={wishCount} />
                </span>
                Wishlist
              </NavLink>
            </li>
            <li className="hidden md:block">
              <NavLink to="/cart" onClick={close} className={linkClass}>
                <span className="relative">
                  <FaShoppingCart />
                  <CountBadge count={cartCount} />
                </span>
                Cart
              </NavLink>
            </li>
            {user ? (
              <>
                <li>
                  <NavLink to="/profile" onClick={close} className={linkClass}>
                    <FaRegUser />
                    <span className="max-w-[8rem] truncate">
                      {user.name.split(" ")[0]}
                    </span>
                  </NavLink>
                </li>
                <li className="md:hidden">
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="px-2 py-2 text-sm text-gray-500 hover:text-red-600 md:p-0"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/login" onClick={close} className={linkClass}>
                  <FaRegUser /> Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
