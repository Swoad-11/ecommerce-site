import { createSlice, createSelector } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { ids: [] },
  reducers: {
    toggleWishlist: (state, { payload: id }) => {
      state.ids = state.ids.includes(id)
        ? state.ids.filter((x) => x !== id)
        : [...state.ids, id];
    },
    removeFromWishlist: (state, { payload: id }) => {
      state.ids = state.ids.filter((x) => x !== id);
    },
  },
});

export const { toggleWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

export const selectWishlistIds = (state) => state.wishlist.ids;

export const selectWishlistProducts = createSelector(selectWishlistIds, (ids) =>
  ids.map((id) => products.find((p) => p.id === id)).filter(Boolean)
);
