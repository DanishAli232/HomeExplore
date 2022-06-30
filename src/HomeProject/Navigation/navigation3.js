import React, { useEffect, useState } from 'react'
import img from '../Images/img2.png';
import './navigation.css';
import { Link } from 'react-router-dom';



const Navigation3 = (props) => {
  

  

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-10 mx-auto'>
          <div className='nav3'>
            <div className='img1'>
              <Link className="" to='/'><img src={img} className = 'img-fluid' alt="" /></Link>
            </div>
            <div className='nav3-2'>
              <input style={{display: 'none'}} type="search" name="" id="" placeholder='Type your Keywords' />
              <span style={{display: 'none'}} className='search-btn'><i className='bi bi-search'></i></span>
              <Link className="" to='/cart' style={{textDecoration: 'none'}}>
                <div className='cart'>
                  <span><i className="bi bi-cart"></i></span>
                  <span>Cart</span>
                  <span>{props.cartdata1}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Navigation3