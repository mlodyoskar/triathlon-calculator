import { describe, it, expect } from "vitest";
import { TriathlonState, setDistance, setPredefinedDistance, triathlonReducer } from "./triathlonSlice";
import { TriathlonDiscipline } from "./triathlonTypes";
import { DisciplinesWithData } from "./triathlonData";

const initialState: TriathlonState = {
 distances: {
  swim: {
   unit: "meters",
   distance: 0,
  },
  bike: {
   unit: "km",
   distance: 0,
  },
  run: {
   unit: "km",
   distance: 0,
  },
 },
};

describe("distances", () => {
 it("should update the distance for a given discipline", () => {
  const action = {
   payload: {
    discipline: "swim",
    distance: 1000,
   },
  } satisfies { payload: { discipline: TriathlonDiscipline; distance: number } };

  const nextState = triathlonReducer(initialState, setDistance(action.payload));

  expect(nextState.distances.swim.distance).toBe(1000);
  expect(nextState.distances.bike.distance).toBe(0);
  expect(nextState.distances.run.distance).toBe(0);
 });

 it("should set distances for all disciplines based on predefined distance passed", () => {
  const action = {
   payload: {
    predefinedDistance: {
     swim: {
      unit: "meters",
      distance: 3800,
     },
     bike: {
      unit: "km",
      distance: 180,
     },
     run: {
      unit: "km",
      distance: 42.2,
     },
    },
   },
  } satisfies { payload: { predefinedDistance: DisciplinesWithData } };

  const nextState = triathlonReducer(initialState, setPredefinedDistance(action.payload));

  expect(nextState.distances.swim.distance).toBe(3800);
  expect(nextState.distances.bike.distance).toBe(180);
  expect(nextState.distances.run.distance).toBe(42.2);
 });
});
