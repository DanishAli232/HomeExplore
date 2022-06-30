import React from 'react'
import img1 from '../../Images/img11.jpg';
import img2 from '../../Images/img12.jpg';
import './Cat1.css';

const Cat2 = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
                <div className='col-6 cat2'>
                    <img src={img1} className = 'img-fluid' alt="" />
                    <div className='des1'>
                    <h4>Kitchen Appliances</h4>
                    <h6>UP TO 20% OFF</h6>
                    </div>
                </div>
                <div className='col-6 cat2-1'>
                    <img src={img2} alt="" className='img-fluid'/>
                    <div className='des1-1'>
                    <h4>Household Supplies</h4>
                    <h6>UP TO 20% OFF</h6>
                    </div>
                </div>
            </div>
            
    </div>
  )
}

export default Cat2