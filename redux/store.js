import { configureStore } from "@reduxjs/toolkit";
import { bitcoinApi } from "./bitcoinApi";

export const store = configureStore({
  reducer: {
    [bitcoinApi.reducerPath]: bitcoinApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    bitcoinApi.middleware,
  ],
});