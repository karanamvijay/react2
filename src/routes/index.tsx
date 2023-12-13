import {useRoutes} from "react-router-dom";
import { EntryRoads, allLessons } from "./entry"

export default function AllRoads(){
    return useRoutes([EntryRoads,allLessons,])
}