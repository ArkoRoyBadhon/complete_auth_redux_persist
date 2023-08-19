import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import userReducer from "./features/user/userSlice";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  auth: userReducer
})

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: {
    persisted: persistedReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const persistor = persistStore(store);

export default store;
