import React, { useEffect, useReducer, useState } from "react";
// import Scrollbars from "react-custom-scrollbars-2";
import { Link } from "react-router-dom";
import Nav2 from "../Navigation/navigation";
// import Checkout from "./checkout";
import "./payment.css";
// import  { reducer } from './reducerCheckout';
import  axios  from "axios";

const Payment = (props) => {

// console.log(tamount);
const [ val , newval ] = useState(0);
const [ val1 , newval1 ] = useState('');
const [ style1 , newstyle ] = useState('none');
const [ shipping , newshipping ] = useState(0);
const [ tamount , newtamount ] = useState(props.amount1);
const [ subtotal , newsubtotal ] = useState(0);





    const confirm = () => {
        if(val === 1 && subtotal !== '' && subtotal !== 0){
        props.details.map((val) => {
            let formData = new FormData();
            // Adding files to the formdata
            formData.append("name", props.adrs1);
            formData.append("email", props.adrs2);
            formData.append('phoneNo' , props.adrs3);
            formData.append('homeAddress' , props.adrs4);
            formData.append('quantity' , val.quantity);
            formData.append('productname' , val.title);
            formData.append('price' , val.price);
            formData.append('productid', val.productID);
    
            //axios
            axios({
                // Endpoint to send files
                url: "http://localhost:8000/file.php",
                method: "POST",
                // Attaching the form data
                data: formData
            })
    
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
          
        })
        alert(`${props.adrs1} Your Order Confirmed. Your Total Amount is ${subtotal}. Thanks for Shopping`)
    }else if(subtotal === '' || subtotal === 0){
        newval1('At least One Product Necessary');
    }else {
        newval1('Please Select Payment Method')
    }
     
    }

    const paymentSelect = () => {
        newval(1);
        newval1('');
        newstyle('flex');
    }
    useEffect(() => {
        if(props.amount1 > 0 && props.amount1 <= 10000 && props.amount1 !== ''){
            newshipping(600);
            newsubtotal(props.amount1 + 6000);
        }else if(props.amount1 > 10000 && props.amount1 <= 30000){
            newshipping(1000);
            newsubtotal( props.amount1 + 1000 );
        }else if(props.amount1 > 30000){
            newshipping(1400);
            newsubtotal( props.amount1 + 1400 );
        }else{
            newshipping(0);
        }
    })


    return (
        <div>
            <div className="container-fluid">
                <Nav2 />
                <div className="row">
                    <div className="col-11 mx-auto ss">



                        <div className="row">
                            <div className="col-md-7 check">
                                <div className="check1">
                                    <div>
                                        <span style={{ fontSize: '30px', color: 'black', paddingLeft: '9px' }}> Select Payment Method</span>
                                    </div>

                                </div>
                                <div style={{position: 'relative' , width: 'min-content'}}>
                                <div className="head-h6" onClick={paymentSelect}>
                                    <i className="bi bi-cash-stack"></i>
                                    <h6>Cash on Delivery</h6>
                                   
                                </div>
                                <div style={{position: 'absolute' , top: '0' , right: '-10px' , fontSize: 'larger'}}>
                                    <i style = {{display: style1}} className="bi bi-check2 check"></i>
                                    </div>
                                    </div>
                            </div>
                            <div className="col-md-4 check2">
                                <div className="check2-1">
                                    <span>Shipping & Billing</span>
                                </div>
                                <div className="check-2-2">
                                    <div className="check2-3">
                                        <div className="head">
                                            <span><i style={{ color: 'blue' }} className="bi bi-geo-alt-fill"></i></span>
                                            <h3 style={{ fontSize: '19px', paddingTop: '3px', paddingLeft: '5px' }}>{props.adrs1}</h3>
                                        </div>
                                        <span style={{ cursor: 'pointer', color: 'blue' }}><Link style={{ textDecoration: 'none', color: 'blue' }} to='/address'>Edit</Link></span>
                                    </div>
                                    <div className="head-des">

                                        <p><span className="head-home">Home</span> {props.adrs4}</p>
                                    </div>
                                    <div className="phoneno">
                                        <div className="p-1">
                                            <span style={{ position: 'relative', bottom: '7px', paddingRight: '5px', color: 'blue' }}><i className="bi bi-telephone-fill"></i></span>
                                            <p>{props.adrs3}</p>
                                        </div>
                                        <span style={{ cursor: 'pointer', color: 'blue' }}><Link style={{ textDecoration: 'none', color: 'blue' }} to='/address'>Edit</Link></span>
                                    </div>
                                    <div className="phoneno">
                                        <div className="p-1">
                                            <span style={{ position: 'relative', bottom: '7px', paddingRight: '5px', color: 'blue' }}><i className="bi bi-envelope-fill"></i></span>
                                            <p>{props.adrs2}</p>
                                        </div>
                                        <span style={{ cursor: 'pointer', color: 'blue' }}><Link style={{ textDecoration: 'none', color: 'blue' }} to='/address'>Edit</Link></span>
                                    </div>
                                    <div className="phoneno">
                                        <div className="p-1">
                                            <span style={{ position: 'relative', bottom: '7px', paddingRight: '5px', color: 'blue' }}><i className="bi bi-house-door-fill"></i></span>
                                            <p>{props.adrs5}</p>
                                        </div>
                                        <span style={{ cursor: 'pointer', color: 'blue' }}><Link style={{ textDecoration: 'none', color: 'blue' }} to='/address'>Edit</Link></span>
                                    </div>
                                    <div className="order">
                                        <h3 style={{ fontSize: '19px' }}>Order</h3>
                                        <div className="price1">
                                            <h4 style={{ fontSize: '17px' }}>Total</h4>
                                            <h5>Rs. {tamount}</h5>
                                        </div>
                                    </div>
                                    <div className = 'shipping'>
                                        <div><h5 style={{fontSize: '17px'}}>Shipping Charges</h5></div>
                                        <div className = 'shipping-1'>
                                            <h5>Rs. {shipping}</h5>
                                        </div>
                                    </div>
                                    <div style={{display: 'flex' , justifyContent: 'space-between' , marginBottom: '10px'}}>
                                        <div></div>
                                        <div>
                                            <h5>Rs. {subtotal}</h5>
                                        </div>
                                    </div>
                                    <div className="payment" onClick={confirm}>
                                        <span>Confirm Order</span>
                                    </div>
                                    <p style={{color: 'red' , fontSize: '15px'}}>{val1}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Payment