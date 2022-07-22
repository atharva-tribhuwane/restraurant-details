import React from "react";
import Cardleft from "./Cardleft";
import Cardmiddle from "./Cardmiddle";
import Cardright from "./Cardright";
import "./restaurantcard.css";

const Restaurantcard = ({data})=>{
    // img sec div 
    // middlepart div
    // review/votes/rating div 
    //bottom

    return(
        data.map((ele)=>{
            return(
                <div key={ele.id} className="rest-card-div" >
                    <Cardleft img={ele.img_url}/>
                    <Cardmiddle dt = {ele}/>
                    <Cardright dt = {ele}/>
                </div>
            )
        })
    )
}

export default Restaurantcard;