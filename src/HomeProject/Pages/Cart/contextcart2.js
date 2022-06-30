import React, { useContext, useState } from 'react'
import './cartitem2.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Cartitem2 from './cartitem2';
// import products from './products';
// import Cartitems from './cartitems';
import { Cartcontext1 } from './cart2';
import { Link } from 'react-router-dom';
import Nav2 from '../../Navigation/navigation';
// import Cartitem2 from './cartitem2';


const Contextcart = (props) => {
  // const [item , newitem ] = useState(products);
  const { item } = useContext(Cartcontext1);
  const { clearCart } = useContext(Cartcontext1);
  const { totalitem,totalamount } = useContext(Cartcontext1);
  // console.log(item)
  const checkoutclicker = () => {
    props.checkoutclicker(item);
  }
  // console.log(props.cartdata1[0].id)
  return (
    <>
      <div className='container-fluid'>
        <Nav2/>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='cartbody1'>

              <section className="main-cart-section1">
                <h1>shopping Cart</h1>
                <p className="total-items1">you have <span className="total-items-count1" > {totalitem} </span>  items in shopping cart</p>
                <div className="cart-items1">

                  <div className="cart-items-container1">
                     <Scrollbars className="cart-items-container1" >
                        {
                          item.map((curItem,index) => {
                            return <Cartitem2 
                            key = {index}
                            title = {curItem.title}
                            desc = {curItem.desc}
                            price = {curItem.price}
                            id = {curItem.id}
                            productId = {curItem.productId}
                            random = {curItem.random}
                            index = {index}
                            quantity = {curItem.quantity}
                            img = {curItem.img}
                            />
                          })
                        }
                        

                      </Scrollbars> 
                      
                  </div>
                </div>
                <div className="cart-total1">
                  <h3>Cart Total: <span> {totalamount}</span></h3>
                  <button onClick={checkoutclicker}><Link style = {{textDecoration: 'none',color: 'white'}}to = '/checkout'>Checkout</Link></button>
                  <button className='clear-cart1' onClick={clearCart} >Clear all data</button>
                </div>

              </section>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Contextcart