import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart } from "../redux/slices/cartSlice";
import {
  toggleWishlist,
  selectWishlistIds,
} from "../redux/slices/wishlistSlice";

// Cart / wishlist actions with user feedback, shared by every page.
const useShopActions = () => {
  const dispatch = useDispatch();
  const wishlistIds = useSelector(selectWishlistIds);
  const cartItems = useSelector((state) => state.cart.items);

  const inCartQty = (id) => cartItems.find((i) => i.id === id)?.quantity ?? 0;

  const addItem = (product, quantity = 1) => {
    if (product.stock === 0) {
      toast.error(`${product.name} is out of stock`);
      return false;
    }
    if (inCartQty(product.id) + quantity > product.stock) {
      toast.error(`Only ${product.stock} in stock`);
      return false;
    }
    dispatch(addToCart({ id: product.id, quantity }));
    toast.success(`Added to cart`);
    return true;
  };

  const isWished = (id) => wishlistIds.includes(id);

  const toggleWish = (product) => {
    const wasWished = isWished(product.id);
    dispatch(toggleWishlist(product.id));
    toast(wasWished ? "Removed from wishlist" : "Saved to wishlist", {
      icon: wasWished ? "💔" : "❤️",
    });
  };

  return { addItem, toggleWish, isWished, inCartQty };
};

export default useShopActions;
