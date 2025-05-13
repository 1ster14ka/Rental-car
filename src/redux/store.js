import { configureStore } from "@reduxjs/toolkit";

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
import { carReducer } from "./cars/carsSlice";
import { filtersReducer } from "./filters/filtersSlice";
import { favouriteReducer } from "./favourite/favouriteSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const favouritesPersistConfig = {
  key: "favourites",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, carReducer);

export const store = configureStore({
  reducer: {
    cars: persistedReducer,
    filters: filtersReducer,
    favourites: persistReducer(favouritesPersistConfig, favouriteReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
