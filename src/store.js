import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Store
const store = configureStore({
  reducer: counterReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;