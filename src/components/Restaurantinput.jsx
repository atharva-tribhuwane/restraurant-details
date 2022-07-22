import React from "react";
import "./restaurantinput.css"

const Restaurantinput = ({dataPost})=>{
    const [showInput, setShowInput] = React.useState();
    const [name,setName] = React.useState("");
    const [cuisine,setCuisine] = React.useState("");
    const [deliverycharge,setDeliveryCharge] = React.useState(0);
    const [deliverytime,setDeliveryTime] = React.useState(0);
    const [costforone,setCostForOne] = React.useState(0);
    const [img,setImg] = React.useState("");
    const [cardpay,setCardPay] = React.useState(false);
    const [cashpay,setCashPay] = React.useState(false);
    const [upipay,setUpiPay] = React.useState(false);

    const postData = (e)=>{
        e.preventDefault();
        // console.log("name:", name);
        // console.log("cuisine:", cuisine);
        // console.log("deliverycharge:", deliverytime);
        // console.log("deliverytime:", deliverytime);
        // console.log("costforone:", costforone);
        // console.log("img:", img);
        // console.log("cardpay:", cardpay);
        // console.log("cashpay:", cashpay);
        // console.log("upi:", upipay);

        const payLoad = {
            name:name,
            cuisine:cuisine,
            rating:0,
            votes:0,
            reviews:0,
            deliverycharge:deliverycharge,
            maxdeliverytime:deliverytime,
            costforone:costforone,
            img_url:img,
            payment_methods:{
                card:cardpay,
                cash:cashpay,
                upi:upipay
            }

        }
        

        dataPost(payLoad);
        

    }

    return (
        <div className="restinput-div">
            
            <form onSubmit={postData} style={{display:"flex", flexDirection:"column"}}>
                <label htmlFor="restname">Restraurant Name</label>
                <input type="text" name="restname" value={name} placeholder="Enter Name Of Restaurant" onChange={(e)=>setName(e.target.value)}/>

                <label htmlFor="restcuisine">Cuisines of Food</label>
                <input type="text" name="restcuisine" value={cuisine} placeholder="Enter Cuisines you serve...." onChange={(e)=>setCuisine(e.target.value)}/>

                <label htmlFor="restdelivery">Delivery Charge</label>
                <input type="text" name="restdelivery" value={deliverycharge} placeholder="Enter Delivery Charge(INR)" onChange={(e)=>setDeliveryCharge(e.target.value)}/>

                <label htmlFor="restdeliverytime">Delivery Time</label>
                <input type="text" name="restdeliverytime" value={deliverytime} placeholder="Enter Delivery Time(Minutes)" onChange={(e)=>setDeliveryTime(e.target.value)}/>
                
                <label htmlFor="restcostforone">Cost for One Person? </label>
                <input type="text" name="restcostforone" value={costforone} placeholder="Enter Cost for one(INR)" onChange={(e)=>setCostForOne(e.target.value)}/>

                <label htmlFor="restimg">Display Image for Restaurant </label>
                <input type="url" name="restimg" value={img} placeholder="Enter img Url" onChange={(e)=>setImg(e.target.value)}/>

                <label htmlFor="restpaymentmethods">Tick on the Payment Methods You Accept</label>
                <div>
                <label htmlFor="restcardpay">Card Payment</label>
                <input type="checkbox" name="restcardpay" value={cardpay} onChange={(e)=>setCardPay(cardpay?false:true)}/>

                <label htmlFor="restcashpay">Cash Payment</label>
                <input type="checkbox" name="restcashpay" value={cashpay} onChange={(e)=>setCashPay(cashpay?false:true)}/>
                
                <label htmlFor="restupi">UPI Payment</label>
                <input type="checkbox" name="restupi" value={upipay} onChange={(e)=>setUpiPay(upipay?false:true)}/>
                </div>

                <input type="submit"/>
            </form>

        </div>
    )
}

export default Restaurantinput;