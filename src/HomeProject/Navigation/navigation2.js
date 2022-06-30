import React from 'react'
import './navigation.css';
import { Link } from 'react-router-dom';
const Navigation2 = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-10 mx-auto'>
                <div className='nav2'>
                  <div className='nav2-des1'>
                  </div>
                  <div className='nav2-des2'>
                    
                    <p className='list-style' style={{color: 'black',textDecoration: 'none'}}> <Link style={{color: 'black',textDecoration: 'none'}} className="" to='/wishlist'>My WishList</Link></p>
                    <p  className='list-style'><Link style={{color: 'black',textDecoration: 'none'}} className="" to='/checkout'>Checkout</Link></p>
                    <p  className='list-style'><Link style={{color: 'black',textDecoration: 'none'}} className="" to='/signin'>Sign In</Link></p>
                    <p className='list-style' style={{color: 'black',textDecoration: 'none'}}> <Link style={{color: 'black',textDecoration: 'none'}} className="" to='/createaccount'>Create Account</Link></p>
                    <p className='list-style' style={{color: 'black',textDecoration: 'none'}}> <Link style={{color: 'black',textDecoration: 'none'}} className="" to='/addproduct'>Add Product</Link></p>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Navigation2