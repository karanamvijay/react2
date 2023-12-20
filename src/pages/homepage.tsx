import { Grid } from "@mui/material"
import { Mycarousel } from "../components/carousel/Mycarousel"
import { Mainnavbar } from "../components/navbar/mainnavba"
import { Card, Mycard } from "../components/card/card"
import img1 from '../static/imag/123.jpeg'
import img2 from '../static/imag/222.jpeg'
import img3 from '../static/imag/111.jpeg'
import img4 from '../static/imag/456.jpeg'
import img5 from '../static/imag/678.jpeg'
import img6 from '../static/imag/910.jpeg'
import img7 from '../static/imag/chinna.jpg'
import img8 from '../static/imag/nani.jpg'
import img9 from '../static/imag/itachi.jpg'
import img10 from '../static/imag/avengers.jpg'
import { useEffect, useState } from "react"
import { flipkartApi } from "../api/flipkart"

export const Home:React.FC<{}>=()=>{
  let [data,setData]=useState<any>([]);
    useEffect(()=>{
(async()=>{
    setData(await flipkartApi()) 
})()
    },[])
    return<>
    <Mainnavbar />
    <br />
    <Grid

  direction="row"
  justifyContent="center"
  alignItems="center"
>
<Mycarousel />
</Grid>
<br />
<Grid
  container
  direction="row"
  justifyContent="space-around"
  alignItems="center"
>
<Mycard img={img1}/>
<Mycard img={img2}/>
<Mycard img={img3}/>
<Mycard img={img4}/>
<Mycard img={img5}/>
<Mycard img={img6}/>
<Mycard img={img7}/>
<Mycard img={img8}/>
<Mycard img={img9}/>
<Mycard img={img10}/>

</Grid>
<h1>static way</h1>

<br />
<Grid
  container
  direction="row"
  justifyContent="space-around"
  alignItems="center"
>
{data.map((item:any)=>{return <Mycard img={item.image}/>})}


</Grid>
</>
}
