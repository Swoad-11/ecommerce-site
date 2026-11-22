import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: { list: [] },
  reducers: {
    placeOrder: {
      reducer: (state, { payload }) => {
        state.list.unshift(payload);
      },
      prepare: (order) => ({
        payload: {
          ...order,
          id: `TS-${Date.now().toString(36).toUpperCase()}`,
          createdAt: new Date().toISOString(),
          status: "Processing",
        },
      }),
    },
  },
});

export const { placeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;

export const selectOrders = (state) => state.orders.list;

export const selectOrderById = (id) => (state) =>
  state.orders.list.find((o) => o.id === id);
