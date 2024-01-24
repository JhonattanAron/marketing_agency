import { createStore } from "redux";
import counterReducer from "redux/reducers/reducers";

const store = createStore(counterReducer);

export default store;
