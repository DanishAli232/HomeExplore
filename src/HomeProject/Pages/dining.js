import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Nav2 from '../Navigation/navigation';
import './pages.css';
import axios from 'axios';

const Dining = (props) => {
    const [ col  , newcol ] =  useState(1);
    const CartClicker = () => {
    
        const info2 = {
            title: props.title,
            desc:  props.title2,
            price: props.price,
            img:   props.img,
            productID: props.productID,
            id:    props.index,
            quantity: 1
        }

        props.data3(info2);
        localStorage.setItem('ddd' , JSON.stringify(info2));
    
        let formData = new FormData();
        // Adding files to the formdata
        formData.append('productid' , props.productID);
        formData.append('productname' , props.title);
        formData.append('price' , props.price);
        
    
        //axios
        axios({
            // Endpoint to send files
            url: "http://localhost:8000/cart.php",
            method: "POST",
            // Attaching the form data
            data: formData
        })
    
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    
        const clicker = () => {
    
            const info = {
                title: props.title,
                title2: props.title2,
                price: props.price,
                img: props.img,
                index: props.index,
                productID: props.productID,
                random: Math.floor(Math.random()*100000),
                quantity: 1
            }
            console.log(info);
            props.datas1(info);
        }
    
        const wishclick = (event) => {
            
            if(col === 1){
                let formData = new FormData();
                // Adding files to the formdata
                formData.append('productid' , props.productID);
                formData.append('productname' , props.title);
                formData.append('price' , props.price)
                // newprev(props.random);
    
                //axios
                axios({
                    // Endpoint to send files
                    url: "http://localhost:8000/wishlist.php",
                    method: "POST",
                    // Attaching the form data
                    data: formData
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
    
    
            event.target.style.color = 'red';
            const info1 = {
                title: props.title,
                title2: props.title2,
                price: props.price,
                img: props.img,
                productID: props.productID,
                index: props.index,
                random: Math.floor(Math.random()*100000),
                quantity: 1
            }
            props.data2(info1);
            
            newcol(0);
            }else if(col === 0) {
                event.target.style.color = '#7e7575'
                newcol(1);
                props.returnVl(props.productID);
                let formData = new FormData();
                // Adding files to the formdata
                formData.append('productid' , props.productID);
        
                //axios
                axios({
                    // Endpoint to send files
                    url: "http://localhost:8000/wishlistdel.php",
                    method: "POST",
                    // Attaching the form data
                    data: formData
                })
        
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    
    return (
        <div className='col-4'>
            
            <div className='item1'>
                <div className='image'>
                    <img src={props.img} className = 'img-fluid' alt="" />
                    <div className='btn-detail'>
                        <span className='detail1' onClick={CartClicker}>Add to Cart</span>
                        <span className='detail2' onClick={clicker}><Link className="detail2-1" to='/about'>View Detail</Link></span>
                    </div>
                </div>
                <p>{props.title} <br />
                    {props.title2}
                </p>
                <div className='Price-detail'>
                <h5>{props.price}</h5>
                <h5 className='wishlist' style={{display: 'flex' , justifyContent: 'flex-end'}}><i class="bi bi-heart-fill"  onClick={wishclick}></i></h5>
                </div>
            </div>
        </div>
    )
}

export default Dining