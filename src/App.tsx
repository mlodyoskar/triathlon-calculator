import { useAppDispatch, useAppSelector } from "./app/hooks";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { isDistanceUnit, isTriathlonDiscipline, setDistance, setUnit, setPredefinedDistance } from "./features/traiathlon/triathlonSlice";
import { predefinedDistances } from "./features/traiathlon/triathlonData";
import { PredefinedDistanceName } from "./features/traiathlon/triathlonTypes";

const units = [
 { id: "km", displayName: "Km" },
 { id: "miles", displayName: "Miles" },
 { id: "meters", displayName: "Meters" },
] as const;

function App() {
 const handleSetPredefinedDistance = (name: PredefinedDistanceName) => {
  const distance = getPredefinedDistanceByName(name);
  dispatch(setPredefinedDistance({ predefinedDistance: distance }));
 };

 const getPredefinedDistanceByName = (name: PredefinedDistanceName) => {
  return predefinedDistances[name];
 };
 const handleSetUnit = (e: SelectChangeEvent, discipline: string) => {
  if (!isTriathlonDiscipline(discipline) || !isDistanceUnit(e.target.value)) return;

  dispatch(setUnit({ unit: e.target.value, discipline }));
 };

 const handleSetDistance = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, discipline: string) => {
  if (!isTriathlonDiscipline(discipline)) return;
  dispatch(setDistance({ discipline, distance: Number(e.target.value) }));
 };

 const dispatch = useAppDispatch();
 const disciplnes = useAppSelector((state) => state.traithlon.distances);
 return (
  <div>
   <h1>triathlon calculator</h1>
   <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <button onClick={() => handleSetPredefinedDistance("full")}>Full</button>
    <button onClick={() => handleSetPredefinedDistance("half")}>Half</button>
    <button onClick={() => handleSetPredefinedDistance("olympic")}>Olympic (1/4)</button>
    <button onClick={() => handleSetPredefinedDistance("sprint")}>Sprint (1/8)</button>

    {Object.entries(disciplnes).map(([key, { distance, unit }]) => (
     <div style={{ display: "flex", gap: "20px" }} key={key}>
      <p>{key}</p>
      <TextField label="Distance" variant="outlined" type="number" value={distance} onChange={(e) => handleSetDistance(e, key)} />
      <FormControl>
       <InputLabel id="demo-simple-select-label">Matric</InputLabel>
       <Select labelId="demo-simple-select-label" value={unit} label="Metric" onChange={(e) => handleSetUnit(e, key)}>
        {units.map(({ id, displayName }) => (
         <MenuItem key={id} value={id}>
          {displayName}
         </MenuItem>
        ))}
       </Select>
      </FormControl>
     </div>
    ))}
   </div>
  </div>
 );
}

export default App;
