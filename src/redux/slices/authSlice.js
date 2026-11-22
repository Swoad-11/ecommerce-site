import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

// Front-end only auth for the demo: accounts live in redux-persist
// (localStorage) and passwords are stored as SHA-256 hashes, never as
// plain text. Swap these thunks for real API calls when a backend exists.

const hashPassword = async (password) => {
  const data = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

const DEMO_USER = {
  id: "demo",
  name: "Demo Shopper",
  email: "demo@techshop.dev",
  phone: "",
  address: "",
  city: "",
  createdAt: "2026-01-01T00:00:00.000Z",
};

const publicUser = ({ passwordHash: _omit, ...user }) => user; // eslint-disable-line no-unused-vars

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, { getState, rejectWithValue }) => {
    const normalized = email.trim().toLowerCase();
    if (getState().auth.users.some((u) => u.email === normalized)) {
      return rejectWithValue("An account with this email already exists.");
    }
    return {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: normalized,
      phone: "",
      address: "",
      city: "",
      createdAt: new Date().toISOString(),
      passwordHash: await hashPassword(password),
    };
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { getState, rejectWithValue }) => {
    const normalized = email.trim().toLowerCase();
    const user = getState().auth.users.find((u) => u.email === normalized);
    if (!user || user.passwordHash !== (await hashPassword(password))) {
      return rejectWithValue("Wrong email or password.");
    }
    return user.id;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { users: [], currentUserId: null },
  reducers: {
    loginAsDemo: (state) => {
      if (!state.users.some((u) => u.id === DEMO_USER.id)) {
        state.users.push(DEMO_USER);
      }
      state.currentUserId = DEMO_USER.id;
    },
    logout: (state) => {
      state.currentUserId = null;
    },
    updateProfile: (state, { payload }) => {
      const user = state.users.find((u) => u.id === state.currentUserId);
      if (user) Object.assign(user, payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.users.push(payload);
        state.currentUserId = payload.id;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.currentUserId = payload;
      });
  },
});

export const { loginAsDemo, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = createSelector(
  [(state) => state.auth.users, (state) => state.auth.currentUserId],
  (users, id) => {
    const user = users.find((u) => u.id === id);
    return user ? publicUser(user) : null;
  }
);
