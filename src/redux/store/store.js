import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import AuthReducer from "../slices/AuthSlice";
import HotelReducer from "../slices/HotelSlice";
import EventReducer from "../slices/EventSlice";
import CarReducer from "../slices/CarSlice";

const persistConfig = {
  key: "tripiphy-merchant",
  storage,
};

const rootReducer = combineReducers({
  auth: AuthReducer,
  hotel: HotelReducer,
  event: EventReducer,
  car: CarReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
