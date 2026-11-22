import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdSwitchAccount } from "react-icons/md";
import { selectCartCount } from "../../redux/slices/cartSlice";
import { selectCurrentUser } from "../../redux/slices/authSlice";

const tileClass =
  "group relative flex h-[70px] w-16 cursor-pointer flex-col items-center justify-center gap-1 overflow-x-hidden rounded-r-md bg-white text-[#33475b] shadow-testShadow hover:bg-[#33475b] hover:text-white";

// Floating quick links on the left edge (desktop only).
const SpecialCase = () => {
  const cartCount = useSelector(selectCartCount);
  const user = useSelector(selectCurrentUser);

  return (
    <div className="fixed top-52 z-20 hidden flex-col gap-2 min-[1440px]:flex">
      <Link to={user ? "/profile" : "/login"} className={tileClass}>
        <div className="flex items-center justify-center">
          <MdSwitchAccount className="-translate-x-12 text-2xl transition-transform duration-200 group-hover:translate-x-3" />
          <MdSwitchAccount className="-translate-x-3 text-2xl transition-transform duration-200 group-hover:translate-x-12" />
        </div>
        <p className="text-xs font-semibold">{user ? "Profile" : "Login"}</p>
      </Link>
      <Link to="/cart" className={tileClass}>
        <div className="flex items-center justify-center">
          <RiShoppingCart2Fill className="-translate-x-12 text-2xl transition-transform duration-200 group-hover:translate-x-3" />
          <RiShoppingCart2Fill className="-translate-x-3 text-2xl transition-transform duration-200 group-hover:translate-x-12" />
        </div>
        <p className="text-xs font-semibold">Cart</p>
        {cartCount > 0 && (
          <p className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
            {cartCount}
          </p>
        )}
      </Link>
    </div>
  );
};

export default SpecialCase;
