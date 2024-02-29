import { AnyAction, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import userReducer from "./user";
import isError from "./isError";

const userPersistConfig = {
  key: "user",
  storage: localStorage,
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const combinedReducer = combineReducers({
  user: persistedUserReducer,
  isError,
});

export type RootState = ReturnType<typeof combinedReducer>;

const rootReducer = (state: RootState | undefined, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }

  const nextState = combinedReducer(state, action);
  return nextState || state;
};

export default rootReducer;
