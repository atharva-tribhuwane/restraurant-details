import React from "react";

const Cardleft = (data)=>{
    const img_url = data;
    // console.log(img_url);
    return(
       <div className="cardleft-img-div">
            <img src={img_url.img} alt="" />
       </div>
    )
}

export default Cardleft;