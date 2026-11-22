import { useSelector } from "react-redux";
import { selectWishlistProducts } from "../../redux/slices/wishlistSlice";
import ProductCard from "../../components/ProductCard/ProductCard";
import EmptyState from "../../components/EmptyState/EmptyState";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const Wishlist = () => {
  const items = useSelector(selectWishlistProducts);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <title>Wishlist | TechShop</title>
      <Breadcrumbs items={[{ label: "Wishlist" }]} />
      {items.length ? (
        <>
          <h1 className="mb-6 text-2xl font-bold text-[#33475b]">
            My Wishlist ({items.length})
          </h1>
          <div className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </>
      ) : (
        <EmptyState
          title="Your wishlist is empty"
          message="Tap the heart on any product to save it for later."
          actionLabel="Browse products"
          actionTo="/products"
        />
      )}
    </div>
  );
};

export default Wishlist;
