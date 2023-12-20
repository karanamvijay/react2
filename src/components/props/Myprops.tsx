import img1 from '../../static/imag/nani.jpg'
import img2 from '../../static/imag/chinna.jpg'
import img3 from '../../static/imag/456.jpeg'
import img4 from '../../static/imag/678.jpeg'

export const Myprops:React.FC=()=>{
let myarry=[img1,img2,img3,img4]


    return <>hello this is MyProps
    <img height={'200px'} src={img1}/>
    <img height={'200px'} src={img2}/>
    <img height={'200px'} src={img3}/>
    <img height={'200px'} src={img4}/>
   <h1>another way</h1>
   <MyImg/>
   {MyImg()}
   <h1>using loop in html</h1>
   {myarry.map((abc)=>{
    return <MyImg/>
   })}

   <h1>using diffent images</h1>
   {myarry.map((im)=>{
    return <MyImg2 gift={im}/>
   })}
    </>
}

let MyImg=()=>{
return  <img height={'200px'} src={img2}/>
}
let MyImg2:React.FC<{gift:any}>=(props)=>{

    return  <img height={'200px'} src={props.gift}/>
}