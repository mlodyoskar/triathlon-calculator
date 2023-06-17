import { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch } from "../../app/hooks";
import { predefinedDistances } from "./triathlonData";
import { setPredefinedDistance, isTriathlonDiscipline, isDistanceUnit, setUnit, setDistance } from "./triathlonSlice";
import { PredefinedDistanceName } from "./triathlonTypes";

const getPredefinedDistanceByName = (name: PredefinedDistanceName) => {
 return predefinedDistances[name];
};

export const useTriathlonDistance = () => {
 const dispatch = useAppDispatch();

 const handleSetPredefinedDistance = (name: PredefinedDistanceName) => {
  const distance = getPredefinedDistanceByName(name);
  dispatch(setPredefinedDistance({ predefinedDistance: distance }));
 };

 const handleSetUnit = (e: SelectChangeEvent, discipline: string) => {
  if (!isTriathlonDiscipline(discipline) || !isDistanceUnit(e.target.value)) return;

  dispatch(setUnit({ unit: e.target.value, discipline }));
 };

 const handleSetDistance = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, discipline: string) => {
  if (!isTriathlonDiscipline(discipline)) return;
  dispatch(setDistance({ discipline, distance: Number(e.target.value) }));
 };

 return { handleSetPredefinedDistance, handleSetUnit, handleSetDistance };
};
