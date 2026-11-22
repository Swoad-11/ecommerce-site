import { createSlice, createSelector } from "@reduxjs/toolkit";
import { products } from "../../data/products";

// The cart only stores ids and quantities; product details always come
// from the catalogue so prices and stock can't go stale in localStorage.
const initialState = { items: [] };

const stockOf = (id) => products.find((p) => p.id === id)?.stock ?? 0;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload: { id, quantity = 1 } }) => {
      const max = stockOf(id);
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity = Math.min(item.quantity + quantity, max);
      } else if (max > 0) {
        state.items.push({ id, quantity: Math.min(quantity, max) });
      }
    },
    increaseQuantity: (state, { payload: id }) => {
      const item = state.items.find((i) => i.id === id);
      if (item && item.quantity < stockOf(id)) item.quantity++;
    },
    decreaseQuantity: (state, { payload: id }) => {
      const item = state.items.find((i) => i.id === id);
      if (item && item.quantity > 1) item.quantity--;
    },
    removeFromCart: (state, { payload: id }) => {
      state.items = state.items.filter((i) => i.id !== id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const FREE_SHIPPING_THRESHOLD = 200;
export const SHIPPING_FEE = 9.99;

const selectCartItems = (state) => state.cart.items;

export const selectCartCount = createSelector(selectCartItems, (items) =>
  items.reduce((sum, i) => sum + i.quantity, 0)
);

export const selectCartDetails = createSelector(selectCartItems, (items) => {
  const lines = items
    .map((i) => {
      const product = products.find((p) => p.id === i.id);
      return product ? { ...product, quantity: i.quantity } : null;
    })
    .filter(Boolean);
  const subtotal = lines.reduce((sum, l) => sum + l.price * l.quantity, 0);
  const shipping =
    subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  return { lines, subtotal, shipping, total: subtotal + shipping };
});
