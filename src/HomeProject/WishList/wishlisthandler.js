import React, { useEffect, useReducer } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Wishlist from "./wishlist";
import "./wishlist.css";
import { reducer } from "./reducer11";
import Nav2 from "../Navigation/navigation";

const WishDes = (props) => {
  
  const initialstate = {
    item: props.wishdata,
    totalamount: 0,
    totalitem: 0,
  };
  const [ state , dispatch ] = useReducer( reducer , initialstate);

const data1 = (data) => {
  // console.log(data);
  props.remover(data);
  console.log(data);
  dispatch(
    {
        type: 'remove_data',
        payload: data 
    }
)
}

const cleardata = () => {
  const data = {}
  props.cleardata(data);
  return dispatch(
    {
      action: 'clear_data',
      
    }
  )
}

useEffect(() => {
  dispatch(
    {
      type: 'get_total'
    }
  )
},[state.item])


const cart1 = (info) => {
  const data = {
    ...info
  }
  props.cart1(data);
  console.log(data);
}

  return (
    <div>
              {/* <Navigation2 /> */}
        {/* <Navigation3 /> */}
        
      <Nav2 />
         <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto ss">
          <h1 className="header1">Wishlist Items</h1>
          <p className="total-items1">you have <span className="total-items-count1" > {state.totalitem} </span>  items in WishList</p>
             {/* <div className="row"> */}
             <div className="cart-items1">
               <div className="cart-items-container1">
                 <Scrollbars>
         {
          
             props.wishdata.map((value , index) => {
                 return   <Wishlist
                 title = {value.title}
                 img = {value.img}
                 title2 = {value.title2}
                 price = {value.price}
                 random = {value.random}
                 quantity ={1}
                 key = {index}
                 index = {index}
                 removedata = {data1}
                 cart1 = {cart1}
                 />
             }
             )
             }
             </Scrollbars>
             </div>
             </div>
             <div className="" style={{display: 'flex', justifyContent: 'flex-end', marginTop: '30px'}}>
             <button className='clear-cart1' onClick={cleardata} >Clear all data</button>
             </div>
             </div>
             </div>
             </div>

     </div>
  )
}


export default WishDes