import { userApi } from "@/api/userApi";
import { configureStore } from "@reduxjs/toolkit";
import {
  default as profileReducer,
  default as userReducer,
} from "./slices/profile-slice";
import saldoReducer from "./slices/saldo-slice";
import topUpReducer from "./slices/top-up-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    saldo: saldoReducer,
    topUp: topUpReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
