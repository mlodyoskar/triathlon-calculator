import { useAppSelector } from "./app/hooks";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTriathlonDistance } from "./features/traiathlon/useTriathlonDistance";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const units = [
 { id: "km", displayName: "Km" },
 { id: "miles", displayName: "Miles" },
 { id: "meters", displayName: "Meters" },
] as const;

function App() {
 const { handleSetDistance, handleSetPredefinedDistance, handleSetUnit } = useTriathlonDistance();
 const disciplnes = useAppSelector((state) => state.traithlon.distances);
 return (
  <div>
   <h1 className="text-4xl">Triathlon calculator</h1>
   <h2>Select distance</h2>
   <Stack direction="row" className="mb-4" gap={2}>
    <Button variant="contained" onClick={() => handleSetPredefinedDistance("full")}>
     Full
    </Button>
    <Button variant="contained" onClick={() => handleSetPredefinedDistance("half")}>
     Half
    </Button>
    <Button variant="contained" onClick={() => handleSetPredefinedDistance("olympic")}>
     Olympic (1/4)
    </Button>
    <Button variant="contained" onClick={() => handleSetPredefinedDistance("sprint")}>
     Sprint (1/8)
    </Button>
   </Stack>
   <Stack direction="column" gap={2}>
    {Object.entries(disciplnes).map(([key, { distance, unit }]) => (
     <div style={{ display: "flex", gap: "20px" }} key={key}>
      <p>{key}</p>
      <TextField label="Distance" size="small" variant="outlined" type="number" value={distance} onChange={(e) => handleSetDistance(e, key)} />
      <FormControl>
       <InputLabel id="demo-simple-select-label">Matric</InputLabel>
       <Select labelId="demo-simple-select-label" size="small" value={unit} label="Metric" onChange={(e) => handleSetUnit(e, key)}>
        {units.map(({ id, displayName }) => (
         <MenuItem key={id} value={id}>
          {displayName}
         </MenuItem>
        ))}
       </Select>
      </FormControl>
     </div>
    ))}
   </Stack>
   <hr></hr>
   <div>
    <h2>Target time or pace </h2>
   </div>
  </div>
 );
}

export default App;
