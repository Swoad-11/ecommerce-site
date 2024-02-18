import { useState } from "react";
import { FaHeartCirclePlus, FaCodeCompare } from "react-icons/fa6";
import { FaThList, FaHome, FaRegUser } from "react-icons/fa";
import { logo } from "../../../assets/index";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-base-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            TechShop
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border
         border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-200 focus:border-blue-500
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
           dark:focus:ring-gray-200 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm
             text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border
         border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-200 focus:border-blue-500
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
           dark:focus:ring-gray-200 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul
            className="flex flex-col p-2 md:p-2 pt-2 font-medium md:space-x-8
           rtl:space-x-reverse md:flex-row md:mt-0"
          >
            <li>
              <Link
                to="/"
                className="flex items-center py-2 px-2 text-gray-200 rounded md:p-0"
                aria-current="page"
              >
                <FaHome className="mr-1" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center py-2 px-2 text-gray-200 rounded md:p-0"
                to="/products"
              >
                <FaThList className="mr-1" />
                <span>Products</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className="flex items-center py-2 px-2 text-gray-200 rounded md:p-0"
                to="/wishlist"
              >
                <FaHeartCirclePlus className="mr-1" />
                <span>WishList</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className="flex items-center py-2 px-2 text-gray-200 rounded md:p-0"
                to="/compare"
              >
                <FaCodeCompare className="mr-1" />
                <span>Compare</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className="flex items-center py-2 px-2 text-gray-200 rounded md:p-0"
                to="/login"
              >
                <FaRegUser className="mr-1" />
                <span>Login</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
