import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import authReducer from "./features/auth/authSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import suppliesReducer from "./features/supplies/suppliesSlice";
import themeReducer from "./features/theme/themeSlice";

const persistConfig = {
  key: "auth",
  storage,
};

const suppliesConfig = {
  key: "supplies",
  storage,
};

const themeConfig = {
  key: "theme",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const persistedSuppliesReducer = persistReducer(
  suppliesConfig,
  suppliesReducer
);

const persistThemeReducer = persistReducer(themeConfig, themeReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
    supplies: persistedSuppliesReducer,
    theme: persistThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
