import { combineReducers, createStore } from "@reduxjs/toolkit";
import CounterReducer from "./reducers/CounterReducer";
import UserReducer from "./reducers/UserReducer";

//! For storing single reducer
// const store = createStore(CounterReducer);

// export default store;

//! For storing multiple reducers
const rootReducer = combineReducers({
  counter: CounterReducer,
  user: UserReducer,
});

const store = createStore(rootReducer);

export default store;
