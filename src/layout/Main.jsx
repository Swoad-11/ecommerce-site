import { Outlet, ScrollRestoration } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import SpecialCase from "../components/SpecialCase/SpecialCase";

const Main = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <SpecialCase />
      <main className="flex-1">{children ?? <Outlet />}</main>
      <Footer />
      <ScrollRestoration />
      <Toaster position="bottom-right" toastOptions={{ duration: 2500 }} />
    </div>
  );
};

export default Main;
