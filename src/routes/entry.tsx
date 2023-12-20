import { Button, Paper } from "@mui/material";
import { AllLEssons } from "../pages/alllessons"; 
import { Link, Outlet } from "react-router-dom";
import { Register } from "../pages/register";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/homepage";
import { Loginpages } from "../pages/loginpage";
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
        <Link to="/project/login">
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
export const allproject = { 
  path: '/project',
  element: <><Layout><Outlet/></Layout></>,
  children:[

    {
      path:'login',
      element:<Loginpages/>
    },
    {
      path:'register',
      element:<Register/>
    },
    {
     path:'home',
     element:<Home/>
    },
  ]
}
 






