import React from 'react'
import { Link } from 'react-router-dom';
import Nav2 from '../Navigation/navigation';
import Nav1s from '../Navigation/navigation1'
import './Productdetail.css';

const Productdetail = (props) => {
  const Viewclicker = () => {
    const info2 = {
      title: props.title,
      desc: props.title2,
      price: props.price,
      img: props.img,
      productID: props.productID,
      id: props.index,
      quantity: 1
  }
  console.log(info2);
  props.data3(info2);
  }
  console.log(props.productdata);
  return (
    <div>
      <Nav2 />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='product-info'>
              <img src={props.productdata.img} alt="" />
              <div className='product-info2'>
                <div>
                  <h4>{props.productdata.title}</h4>
                  <h6>{props.productdata.title2}</h6>
                  <h5 style={{color: '#fb9327'}}>Rs. {props.productdata.price}</h5>
                </div>
                <div>
                <button className='btn-detail22' onClick={Viewclicker}><Link style = {{textDecoration: 'none',color: 'white'}}to = '/cart'>Add to Cart</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productdetail