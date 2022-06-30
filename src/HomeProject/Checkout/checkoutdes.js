import React, { useEffect, useReducer } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { Link } from "react-router-dom";
import Nav2 from "../Navigation/navigation";
import Checkout from "./checkout";
import "./checkout.css";
import { reducer } from './reducerCheckout';

const CheckoutDes = (props) => {
    console.log(props.checkoutdata);
    const initialstate = {
        item: props.checkoutdata,
        totalamount: 0,
        totalitem: 0,
    };
    const [state1, dispatch] = useReducer(reducer, initialstate);

    if(state1.totalamount === 0){
        console.log('dsadsadsad');
    }

    const delid = (data) => {
        props.delid(data);
        dispatch(
            {
                type: 'remove_data',
                payload: data
            }
        )
    }
    console.log(state1.totalitem);
    console.log(state1.totalamount);
    console.log(state1.item);

    useEffect(() => {
        dispatch(
            {
                type: 'get_total',
            }
        )
    }, [state1.item])

    const paymentClicker = () => {
        props.totalamount(state1.totalamount);

    }



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
                                        <span>{state1.totalitem} Items</span>
                                    </div>
                                    <div style={{ marginLeft: '97px' }}>
                                        <span>
                                            Price
                                        </span>
                                    </div>
                                    <div>
                                        <span> Quantity</span>
                                    </div>
                                </div>
                                <Scrollbars style={{ height: '350px' }}>
                                    {
                                        props.checkoutdata.map((value, index) => {
                                            return <Checkout
                                                title={value.title}
                                                img={value.img}
                                                desc={value.desc}
                                                price={value.price}
                                                quantity={value.quantity}
                                                random={value.random}
                                                productId = {value.productId}
                                                key={index}
                                                index={index}
                                                delid={delid}
                                            />
                                        }
                                        )
                                    }
                                </Scrollbars>
                            </div>
                            <div className="col-md-4 check2">
                                <div className="check2-1">
                                    <span>Shipping & Billing</span>
                                </div>
                                <div className="check-2-2">
                                    <div className="check2-3">
                                        <div className="head">
                                            <span><i style={{ color: 'blue' }} className="bi bi-geo-alt-fill"></i></span>
                                            <h3 className="head111" style={{ fontSize: '19px', paddingTop: '3px', paddingLeft: '5px' }}>{props.addressdata1}</h3>
                                        </div>
                                        <span style={{ cursor: 'pointer', color: 'blue' }}><Link style={{ textDecoration: 'none', color: 'blue' }} to='/address'>Edit</Link></span>
                                    </div>
                                    <div className="head-des">

                                        <p><span className="head-home">Home</span> {props.addressdata4}</p>
                                    </div>
                                    <div className="phoneno">
                                        <div className="p-1">
                                            <span style={{ position: 'relative', bottom: '7px', paddingRight: '5px', color: 'blue' }}><i className="bi bi-telephone-fill"></i></span>
                                            <p>{props.addressdata3}</p>
                                        </div>
                                        <span style={{ cursor: 'pointer', color: 'blue' }}><Link style={{ textDecoration: 'none', color: 'blue' }} to='/address'>Edit</Link></span>
                                    </div>
                                    <div className="phoneno">
                                        <div className="p-1">
                                            <span style={{ position: 'relative', bottom: '7px', paddingRight: '5px', color: 'blue' }}><i className="bi bi-envelope-fill"></i></span>
                                            <p>{props.addressdata2}</p>
                                        </div>
                                        <span style={{ cursor: 'pointer', color: 'blue' }}><Link style={{ textDecoration: 'none', color: 'blue' }} to='/address'>Edit</Link></span>
                                    </div>
                                    <div className="phoneno">
                                        <div className="p-1">
                                            <span style={{ position: 'relative', bottom: '7px', paddingRight: '5px', color: 'blue' }}><i className="bi bi-house-door-fill"></i></span>
                                            <p>{props.addressdata5}</p>
                                        </div>
                                        <span style={{ cursor: 'pointer', color: 'blue' }}><Link style={{ textDecoration: 'none', color: 'blue' }} to='/address'>Edit</Link></span>
                                    </div>
                                    <div className="order">
                                        <h3 style={{ fontSize: '19px' }}>Order</h3>
                                        <div className="price1">
                                            <h4 style={{ fontSize: '17px' }}>Total</h4>
                                            <h5>Rs. {state1.totalamount}</h5>
                                        </div>
                                    </div>
                                    <div className="payment" onClick={paymentClicker}>
                                        <span><Link style={{ textDecoration: 'none', color: 'white' }} to='/payment'>Payment</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default CheckoutDes