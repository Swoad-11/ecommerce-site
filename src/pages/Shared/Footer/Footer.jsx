import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { logo, payment } from "../../../assets/index.js";

const shopLinks = [
  { to: "/products", label: "All products" },
  { to: "/products?category=laptop", label: "Laptops" },
  { to: "/products?category=smart-watch", label: "Smart watches" },
  { to: "/products?category=headphone", label: "Headphones" },
];

const accountLinks = [
  { to: "/profile", label: "My account" },
  { to: "/cart", label: "Cart" },
  { to: "/wishlist", label: "Wishlist" },
  { to: "/login", label: "Login / Register" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-12 bg-base-200 text-base-content">
      <div className="mx-auto grid max-w-7xl gap-8 p-8 sm:grid-cols-2 lg:grid-cols-4">
        <nav aria-label="Shop" className="flex flex-col gap-2">
          <h2 className="footer-title">Shop</h2>
          {shopLinks.map((l) => (
            <Link key={l.to} to={l.to} className="link link-hover">
              {l.label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Account" className="flex flex-col gap-2">
          <h2 className="footer-title">Account</h2>
          {accountLinks.map((l) => (
            <Link key={l.to} to={l.to} className="link link-hover">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-2">
          <h2 className="footer-title">Customer care</h2>
          <p>Free shipping on orders over $200</p>
          <p>7-day easy returns</p>
          <p>Official warranty on every product</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="footer-title">Secure payment</h2>
          <img src={payment} alt="Accepted payment methods" className="max-w-xs" />
        </div>
      </div>
      <div className="border-t border-base-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 py-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-8" />
            <p className="font-semibold">
              TechShop
              <span className="block text-sm font-normal text-gray-500">
                Reliable tech, delivered fast.
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <p>© {currentYear} TechShop. A portfolio demo project.</p>
            <a
              href="https://github.com/Swoad-11/ecommerce-site"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Source code on GitHub"
              className="text-xl hover:text-blue-700"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
