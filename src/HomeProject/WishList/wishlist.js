import React from 'react';
import Nav2 from '../Navigation/navigation';
import Nav1s from '../Navigation/navigation1';
import './wishlist.css';

const Wishlist = (props) => {
  // console.log(props.index);

  const remover = () => {
    
    props.removedata(props.random);
    // console.log(props.index);
  }
  const cartClicker = () => {
    const data = {
      title: props.title,
      img: props.img,
      desc: props.title2,
      price: props.price,
      quantity: 1,
      key: props.index,
      random: props.random 
    }
    props.cart1(data);
  }

  return (
    <div>
        {/* <Nav2 /> */}
        <div className='styling'>
          <div className='styling-1'>
        <img src={props.img} alt="" />
        <div className='wish-1'>
        <h5 className='wishhead1'>{props.title}</h5>
        <h5>{props.price}</h5>
        </div>
        </div>
        <div className='styling-2'>
        <span onClick={cartClicker}>Add to Cart</span>
        <span style={{marginLeft: '5px'}} onClick = {remover}>Remove</span>
        </div>
        </div>
    </div>
  )
}

export default Wishlist