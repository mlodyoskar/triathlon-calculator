import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type TriathlonDiscipline = "swim" | "bike" | "run";
type DistanceUnit = "km" | "meters" | "miles";

interface TriathlonState {
 distances: {
  [key in TriathlonDiscipline]: {
   distance: number;
   unit: DistanceUnit;
  };
 };
}

export function isTriathlonDiscipline(value: any): value is TriathlonDiscipline {
 return ["swim", "bike", "run"].includes(value);
}

export function isDistanceUnit(value: any): value is DistanceUnit {
 return ["km", "meters", "miles"].includes(value);
}

const initialState: TriathlonState = {
 distances: {
  bike: { distance: 0, unit: "km" },
  swim: { distance: 0, unit: "meters" },
  run: { distance: 0, unit: "km" },
 },
};

const { actions, reducer } = createSlice({
 name: "triathlon",
 initialState,
 reducers: {
  setDistance(state, action: PayloadAction<{ discipline: TriathlonDiscipline; distance: number }>) {
   state.distances[action.payload.discipline].distance = action.payload.distance;
  },
  setUnit(state, action: PayloadAction<{ discipline: TriathlonDiscipline; unit: DistanceUnit }>) {
   state.distances[action.payload.discipline].unit = action.payload.unit;
  },
 },
});

export const { setDistance, setUnit } = actions;
export { reducer as triathlonReducer };
