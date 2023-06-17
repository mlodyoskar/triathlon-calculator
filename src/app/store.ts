import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../features/counter/counterSlice";
import { triathlonReducer } from "../features/traiathlon/triathlon.slice";

export const store = configureStore({
 reducer: {
  counter: counterReducer,
  traithlon: triathlonReducer,
 },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
