export const flipkartApi=async()=>{


    let data = fetch('/')
    data=await(await data).json()
    return data
}