import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./User/UserSlice.js";

export default configureStore({
  reducer: { user: UserReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
