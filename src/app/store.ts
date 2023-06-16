import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../features/counter/counterSlice";
import { triathlonReducer } from "../features/traiathlon/triathlonSlice";

export const store = configureStore({
 reducer: {
  counter: counterReducer,
  traithlon: triathlonReducer,
 },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
