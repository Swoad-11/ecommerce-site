import { Link } from "react-router-dom";
import { notFoundGif } from "../../assets";

const NotFound = ({ message = "The page you're looking for doesn't exist." }) => (
  <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-16 text-center">
    <title>Not found | TechShop</title>
    <img src={notFoundGif} alt="" className="w-full max-w-sm" />
    <h1 className="text-2xl font-bold text-[#33475b]">Page not found</h1>
    <p className="text-gray-600">{message}</p>
    <div className="flex gap-3">
      <Link to="/" className="btn btn-outline">
        Go home
      </Link>
      <Link to="/products" className="btn btn-neutral">
        Browse products
      </Link>
    </div>
  </div>
);

export default NotFound;
