import React from "react";

const Cardright = (props)=>{
    const data = props.dt;
    return(
        <div className="card-right-div">
            <span>{data.rating}</span>
            <span>{data.votes} Votes</span>
            <span>{data.reviews} Reviews</span>
        </div>
    )
}

export default Cardright;