import React, { useEffect } from 'react'


const Checkout = (props) => {
    // let data = props.checkoutdata.length;
    // console.log(props.checkoutdata[data-1]);
    const deletedata = () => {
      props.delid(props.random);
    }
  return (
    <div className='checkout'>
        <div className='checkout-1'>
            <img src={props.img} alt="" />
            <div className='checkout-2'>
            <h3 className='checkhead1'>{props.title}</h3>
            <p>{props.desc}</p>
            
        </div>
        </div>
     
        <div className='checkout-3'>
            <h4>Rs. {props.price}</h4>
            <span onClick={deletedata}><i className='bi bi-trash2-fill'></i></span>
        </div>
        <div className='checkout-4'>
            <h5>Qty: {props.quantity}</h5>
        </div>
        <hr />
</div>
  )
}

export default Checkout