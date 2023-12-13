import { Button, Paper } from "@mui/material";
import { AllLEssons } from "../pages/alllessons"; // Corrected case
import { Link } from "react-router-dom";
export const EntryRoads = {
  path: '/',
  element: (
    <div>
      <Paper>
        <h1>Where do you want to go?</h1>
        <Link to="/all-lessons">
          <Button variant="contained" color="success">
            Lessons
          </Button>
        </Link>
        <Link to="/project">
          <Button variant="contained" color="error">
            Project
          </Button>
        </Link>
      </Paper>
    </div>
  )
};

export const allLessons = { 
  path: '/all-lessons',
  element: <AllLEssons /> 
}





