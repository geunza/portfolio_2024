import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import { persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
import reducer from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
const enhancer = composeWithDevTools(applyMiddleware(thunk));
export const store = createStore(reducer, enhancer);
export const persistor = persistStore(store);

const makeStore = (context: any) => {
  return configureStore({
    reducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
  });
};

export const wrapper = createWrapper(makeStore, {
  debug: false,
});
export default store;
