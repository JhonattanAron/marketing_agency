import RootReducer from "redux/reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: RootReducer,
});

export default store;
