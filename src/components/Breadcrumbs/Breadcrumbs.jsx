import { Link } from "react-router-dom";

const Breadcrumbs = ({ items }) => (
  <nav aria-label="Breadcrumb" className="breadcrumbs mb-4 text-sm text-gray-500">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {items.map((item) => (
        <li key={item.label} className="max-w-[16rem] truncate">
          {item.to ? (
            <Link to={item.to}>{item.label}</Link>
          ) : (
            <span aria-current="page" className="text-gray-800">
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ul>
  </nav>
);

export default Breadcrumbs;
