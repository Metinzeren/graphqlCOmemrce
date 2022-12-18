import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "../redux/slices/productSlice";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import basketReducer from "./slices/basketSlice";
import userReducer from "./slices/userSlice";

const reducers = combineReducers({
  product: productsReducer,
  basketList: basketReducer,
  userInfo: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

let persistor = persistStore(store);
export default store;
export { persistor };
