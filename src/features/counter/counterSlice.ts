import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
 value: number;
}

const initialState: CounterState = {
 value: 100,
};

const { actions, reducer } = createSlice({
 name: "counter",
 initialState,
 reducers: {
  increment(state) {
   state.value++;
  },
  addValue(state, action: PayloadAction<number>) {
   state.value += action.payload;
  },
 },
});

export const { increment, addValue } = actions;
export { reducer as counterReducer };
