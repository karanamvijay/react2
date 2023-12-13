import { useEffect,useState } from "react"
import {flipkartApi,} from "../../api/flipkart"

export const Myuseffect:React.FC<{}>=()=>{
    let [mydata,setMyData]=useState<any>([])
    useEffect(()=>{
        (async()=>{
            setMyData(await flipkartApi())
        })()
    },[])
    console.log('12345',mydata)

    console.log('im there',mydata)
    return<>
    {mydata.map((item:any)=>{ return <img height='200px' src={`${item.image}`}/> })}
    
    </>
}