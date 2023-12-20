import {useRoutes} from "react-router-dom";
import { EntryRoads, allLessons, allproject } from "./entry"

export default function AllRoads(){
    return useRoutes([EntryRoads,allLessons,allproject])
}