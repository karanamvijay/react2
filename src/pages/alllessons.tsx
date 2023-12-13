import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import { useState } from "react"
import {MyHook} from "../components/MyHook"
import { SocialMedisSharing } from "../components/reactshare/SocialMediasSharing"
import { Myprops } from "../components/props/Myprops"
import { Myuseffect } from "../components/hooks/Myuseffect"

export const AllLEssons:React.FC<{}>=()=>{
    let [val,setVal]=useState('3')
    return <Box>
<h1>all lessons</h1>
<TabContext value={`${val}`}>
    <TabList onChange={(e,num)=>{setVal(num)}}>
        <Tab label="lesson1" value="1"/>
        <Tab label="share" value="2"/>
        <Tab label="fragment" value="3"/>
        <Tab label="Mypropes" value="4"/>
        <Tab label="useffect" value={"5"}/>
    </TabList>
    <TabPanel value={"1"}>
   <MyHook/>
    </TabPanel>
    <TabPanel value={"2"}>
    < SocialMedisSharing/>
    </TabPanel>
    <TabPanel value={"3"}> 
    &lt; and &gt;
    </TabPanel>
    <TabPanel value={"4"}>
   <Myprops/>
    </TabPanel>
    <TabPanel value={"5"}>
   < Myuseffect/>
    </TabPanel>
</TabContext>
    </Box>
}
