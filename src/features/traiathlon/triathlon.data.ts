import { DistanceUnit, PredefinedDistanceName, TriathlonDiscipline } from "./triathlon.types";

export type DisciplinesWithData = {
 [key in TriathlonDiscipline]: {
  unit: DistanceUnit;
  distance: number;
 };
};

type TriathlonDistance = {
 [key in PredefinedDistanceName]: DisciplinesWithData;
};

export const predefinedDistances: TriathlonDistance = {
 full: {
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
 half: {
  swim: {
   unit: "meters",
   distance: 1900,
  },
  bike: {
   unit: "km",
   distance: 90,
  },
  run: {
   unit: "km",
   distance: 21.1,
  },
 },
 olympic: {
  swim: {
   unit: "meters",
   distance: 1500,
  },
  bike: {
   unit: "km",
   distance: 40,
  },
  run: {
   unit: "km",
   distance: 10,
  },
 },
 sprint: {
  swim: {
   unit: "meters",
   distance: 750,
  },
  bike: {
   unit: "km",
   distance: 20,
  },
  run: {
   unit: "km",
   distance: 5,
  },
 },
};
