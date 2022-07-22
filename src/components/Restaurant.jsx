import React from "react";
import Restaurantinput from "./Restaurantinput";
import Restaurantcard from "./Restaurantcard";
const Restaurant = () => {

    const [showInput, setShowInput] = React.useState(false);
    const [data,setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const dataPost=(payLoad)=>{
        console.log(payLoad);
        fetch("http://localhost:3001/restraurants",{
            method:"POST",
            body:JSON.stringify(payLoad),
            headers:{
                "Content-Type":"application/json"
            }
        })
          .then((res)=>{console.log(res); setIsLoading(true); getData()})
          .catch((err)=>console.log(err))
          .finally(()=>alert("Restaurant Added Successfully!!!"));
    }

    const getData = ()=>{
        fetch("http://localhost:3001/restraurants")
          .then((res)=>res.json())
          .then((res)=>{setData(res); console.log(res); setIsLoading(false)})
          .catch((err)=>console.log(err));
    }
    React.useEffect(()=>{
        setIsLoading(true);
        getData();
    },[])
    return(
        <div className="main">
        <h1><i>GOMATO</i></h1>
            {
                !showInput?<button onClick={()=>setShowInput(showInput?false:true)}>Add A Restaurant</button>:<Restaurantinput dataPost = {dataPost}/>

            }
            {
                !isLoading?<Restaurantcard data = {data}/>:<h1>Loading...</h1>
            }
            
            
            
        </div>
    )
}

export default Restaurant;