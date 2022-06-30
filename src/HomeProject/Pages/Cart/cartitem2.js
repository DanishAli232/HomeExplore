import React, { useContext } from 'react'

import './cartitem2.css';
// import { removeItem } from './cart2';
import { Cartcontext1 } from './cart2';

const Cartitem2 = (props) => {
    // console.log(props.random);
    const { removeItem,increment,decrement } = useContext(Cartcontext1);
  return (
    <div className='container-fluid'>
                
    <div className='items-info1'>
        <div className='product-img1'>
            <img src = {props.img} alt="" />
            <div className='title1'>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
        </div>

        <div className="add-minus-quantity1">
             <i onClick = {() => decrement(props.random)}className="bi bi-dash"></i>
                 <input type="text"  placeholder = {props.quantity} />
                 <i onClick = {() => increment(props.random)} className="bi bi-plus"></i>
             </div>
             <div className="price1">
                 <h3>{props.price}</h3>
             </div>
             <div className="remove-item1">
                 <span className='' ><i onClick={() => removeItem(props.random)} className='bi bi-trash2-fill'></i></span>
             </div>
             
    </div>
    <hr />

    </div>
    
  )
}

export default Cartitem2