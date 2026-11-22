import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import { products } from "../../data/products";
import { categories, getCategoryLabel } from "../../data/catalog";
import ProductCard from "../../components/ProductCard/ProductCard";
import EmptyState from "../../components/EmptyState/EmptyState";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const SORTS = {
  featured: { label: "Featured", fn: () => 0 },
  "price-asc": { label: "Price: low to high", fn: (a, b) => a.price - b.price },
  "price-desc": { label: "Price: high to low", fn: (a, b) => b.price - a.price },
  rating: { label: "Top rated", fn: (a, b) => b.rating - a.rating },
  name: { label: "Name A–Z", fn: (a, b) => a.name.localeCompare(b.name) },
};

const allBrands = [...new Set(products.map((p) => p.brand))].sort();
const categoriesInStock = categories.filter((c) =>
  products.some((p) => p.category === c.slug)
);

// All filter state lives in the URL so filtered views can be shared,
// bookmarked and reached from the navbar search, category tiles and brands.
const Products = () => {
  const [params, setParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const q = params.get("q") ?? "";
  const category = params.get("category") ?? "";
  const brandParam = params.get("brand") ?? "";
  const brands = brandParam.split(",").filter(Boolean);
  const minPrice = params.get("min") ?? "";
  const maxPrice = params.get("max") ?? "";
  const inStock = params.get("inStock") === "1";
  const sort = SORTS[params.get("sort")] ? params.get("sort") : "featured";

  const update = (changes) => {
    const next = new URLSearchParams(params);
    Object.entries(changes).forEach(([key, value]) => {
      if (value === "" || value === null || value === false) next.delete(key);
      else next.set(key, value === true ? "1" : value);
    });
    setParams(next, { replace: true });
  };

  const toggleBrand = (brand) => {
    const next = brands.includes(brand)
      ? brands.filter((b) => b !== brand)
      : [...brands, brand];
    update({ brand: next.join(",") });
  };

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);
    const lowerBrands = brandParam
      .split(",")
      .filter(Boolean)
      .map((b) => b.toLowerCase());
    return products
      .filter(
        (p) =>
          !term ||
          [p.name, p.brand, getCategoryLabel(p.category)]
            .join(" ")
            .toLowerCase()
            .includes(term)
      )
      .filter((p) => !category || p.category === category)
      .filter(
        (p) => !lowerBrands.length || lowerBrands.includes(p.brand.toLowerCase())
      )
      .filter((p) => isNaN(min) || p.price >= min)
      .filter((p) => isNaN(max) || p.price <= max)
      .filter((p) => !inStock || p.stock > 0)
      .sort(SORTS[sort].fn);
  }, [q, category, brandParam, minPrice, maxPrice, inStock, sort]);

  const hasFilters = [...params.keys()].some((k) => k !== "sort");
  const heading = category
    ? getCategoryLabel(category)
    : q
      ? `Results for “${q}”`
      : "All Products";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <title>{`${heading} | TechShop`}</title>
      <Breadcrumbs items={[{ label: "Products" }]} />

      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#33475b]">{heading}</h1>
          <p className="text-sm text-gray-500">
            {results.length} product{results.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="btn btn-sm lg:hidden"
            onClick={() => setShowFilters((s) => !s)}
            aria-expanded={showFilters}
            aria-controls="product-filters"
          >
            <FaFilter /> Filters
          </button>
          <label className="flex items-center gap-2 text-sm">
            <span className="whitespace-nowrap text-gray-600">Sort by</span>
            <select
              className="select select-sm select-bordered bg-white"
              value={sort}
              onChange={(e) => update({ sort: e.target.value })}
            >
              {Object.entries(SORTS).map(([key, { label }]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <aside
          id="product-filters"
          className={`${showFilters ? "block" : "hidden"} w-full shrink-0 space-y-6 rounded-lg bg-white p-5 shadow-sm lg:block lg:w-64 lg:self-start`}
        >
          <div>
            <label htmlFor="filter-search" className="mb-2 block font-semibold">
              Search
            </label>
            <input
              id="filter-search"
              type="search"
              value={q}
              onChange={(e) => update({ q: e.target.value })}
              placeholder="Product, brand…"
              className="input input-sm input-bordered w-full bg-white"
            />
          </div>

          <fieldset>
            <legend className="mb-2 font-semibold">Category</legend>
            <ul className="space-y-1 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => update({ category: "" })}
                  className={`hover:text-blue-700 ${!category ? "font-semibold text-blue-700" : "text-gray-600"}`}
                >
                  All categories
                </button>
              </li>
              {categoriesInStock.map((c) => (
                <li key={c.slug}>
                  <button
                    type="button"
                    onClick={() => update({ category: c.slug })}
                    className={`hover:text-blue-700 ${category === c.slug ? "font-semibold text-blue-700" : "text-gray-600"}`}
                  >
                    {c.label}
                  </button>
                </li>
              ))}
            </ul>
          </fieldset>

          <fieldset>
            <legend className="mb-2 font-semibold">Brand</legend>
            <div className="space-y-1 text-sm">
              {allBrands.map((b) => (
                <label key={b} className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs"
                    checked={brands.some((x) => x.toLowerCase() === b.toLowerCase())}
                    onChange={() => toggleBrand(b)}
                  />
                  {b}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 font-semibold">Price ($)</legend>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                inputMode="decimal"
                aria-label="Minimum price"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => update({ min: e.target.value })}
                className="input input-sm input-bordered w-full bg-white"
              />
              <span className="text-gray-400">–</span>
              <input
                type="number"
                min="0"
                inputMode="decimal"
                aria-label="Maximum price"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => update({ max: e.target.value })}
                className="input input-sm input-bordered w-full bg-white"
              />
            </div>
          </fieldset>

          <label className="flex cursor-pointer items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="toggle toggle-sm"
              checked={inStock}
              onChange={(e) => update({ inStock: e.target.checked })}
            />
            In stock only
          </label>

          {hasFilters && (
            <button
              type="button"
              className="btn btn-sm btn-outline w-full"
              onClick={() => setParams({}, { replace: true })}
            >
              Clear all filters
            </button>
          )}
        </aside>

        <section className="flex-1">
          {results.length ? (
            <div className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 md:grid-cols-3">
              {results.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No products found"
              message={
                brands.length
                  ? `We don't have ${brands.join(", ")} products in stock right now. Try another brand or clear the filters.`
                  : "Try a different search or clear the filters."
              }
              actionLabel="Clear filters"
              onAction={() => setParams({}, { replace: true })}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default Products;
