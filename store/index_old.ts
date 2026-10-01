import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/authSlice";
import shippedCount from "./slices/shippedCountSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    shippedCount: shippedCount,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
