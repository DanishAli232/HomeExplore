import React, { createContext, useEffect, useReducer } from 'react'
import { reducer } from './reducer1';

import './cart.css';
import Contextcart2 from './contextcart2';

export const Cartcontext1 = createContext();

const Cart2 = (props) => {

  const initialstate = {
    item: props.cartdata1,
    totalamount: 0,
    totalitem: 0,
  };

  const [ state , dispatch ] = useReducer( reducer , initialstate);
 
  const removeItem = (random) => {
    props.removeittem(random);
    return dispatch(
      {
        type: 'remove_Item',
        payload: random
      }
    ) 
  }

  const increment = (random) => {
    
    return dispatch(
      {
        type: 'increment',
        payload: random,
      }
    ) 
  }

  const decrement = (random) => {
    
    return dispatch(
      {
        type: 'decrement',
        payload: random,
      }
    ) 
    
  }

  const clearCart = () => {
    return dispatch(
      {
        type: 'clear-cart'
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

  useEffect(() => {
    dispatch(
      {
        type: 'total_amount'
      }
    )
  },[state.item])

  useEffect(() => {
    props.cartItem23(state.totalitem);
  })

  const checkoutclicker = (data1) => {
    const data = [...data1]
    props.checkoutclicker(data);
    props.totalitem(state.totalitem);
    props.totalamount(state.totalamount);
  }
   
  
  return (
    <div className='cartbody1'>
      <Cartcontext1.Provider value={{ ...state , clearCart , removeItem , increment , decrement}}>
        <Contextcart2 checkoutclicker = {checkoutclicker}/>
      </Cartcontext1.Provider>
    </div>
  )
}

export default Cart2