import React from "react";

const Cardmiddle = (props)=>{
    const data = props.dt;
    // console.log(data)
    return(
        <div className="card-middle-div">
            <h2>{data.name}</h2>
            <div>{data.cuisine}</div>
            <div>Cost &#8377;{data.costforone} for one</div>
            <div><li>Min &#8377;{data.deliverycharge}</li> <li>{data.maxdeliverytime} Mins</li></div>
            {
                data.payment_methods.card &&  data.payment_methods.cash &&  data.payment_methods.upi?<div>Aceepts Both Online/Offline payments</div>:data.payment_methods.card && data.payment_methods.upi && !data.payment_methods.cash?<div>Accepts Online payments only</div>:data.payment_methods.card && !data.payment_methods.upi && !data.payment_methods.cash?<div>Accepts Card Payments only</div>:
                !data.payment_methods.card && data.payment_methods.upi && !data.payment_methods.cash?<div>Accepts UPI Payments only</div>:
                <div>Accepts Cash Payments only</div>
            }

        </div>
    )
}

export default Cardmiddle;