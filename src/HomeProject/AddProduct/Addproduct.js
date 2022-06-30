import React, { useState } from 'react';
import '../Checkout/checkout.css';

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';


const Addproduct = (props) => {
    
    const [ val1 , newchanger1 ] = useState('');
    const [ val2 , newchanger2 ] = useState('');
    const [ val3 , newchanger3 ] = useState('');
    const [ val4 , newchanger4 ] = useState(0);
    const [ val5 , newchanger5 ] = useState('');
    const [ val6 , newchanger6 ] = useState('');
    const [ val7 , newchanger7 ] = useState('');
    const [ val8 , newchanger8 ] = useState('');
    const [ val9 , newchanger9 ] = useState('');
    const [ val10 , newchanger10 ] = useState('');
    const [result , newresult ] = useState('');
    // const [ result , newresult ] = useState('dsadsd');

    let navigate = useNavigate(); 

    const changer1 = (event) => {
        newchanger1(event.target.value);
    }

    const changer6 = (event) => {
        newchanger2(event.target.value)
    }

    const changer2 = (event) => {
        newchanger4(event.target.value);
    }

    const changer3 = (event) => {
        newchanger3(event.target.value);
    }


    const changer5 = (event) => {
        newchanger9(event.target.value);
    }

    const handlesubmit = (event) => {
        event.preventDefault();
        let accept0 = '';
        let accept1 = '';
        let accept2 = '';
        let accept4 = '';
        let accept5 = '';

  
         if(val1 === ''){
            newchanger5('enter your ProductName');
            accept0 = 'no';
        }else {
            newchanger5('');
            accept0 = 'ok';
        }

        if(val4 === ''){
            newchanger6('Enter Your ProductID');
            accept1 = 'no';
        }else{
            newchanger6('');
            accept1 = 'ok';
        }

        if(val9 === ''){
            newchanger10('Upload Your File');
            accept4 = 'no';
        }else{
            newchanger10('');
            accept4 = 'ok';
        }

        if(val3 === ''){
            newchanger7('Enter Product Description');
            accept2 = 'no';
        }else {
            newchanger7('');
            accept2 = 'ok';
        }

        if( val2 === ''){
            newchanger6('Enter the value of Price');
            accept5 = 'no';
        }else {
            newchanger6('');
            accept5= 'ok'
        }
        
        if(accept0 === 'ok'&&accept1 === 'ok'&&accept2 === 'ok'&&accept4 === 'ok'&&accept5 === 'ok'){
            // let data = val9.replace(/^C:\\fakepath\\/, "");
            // console.log(data);
            // newchanger9(data);
            const productinfo = {
                title: val1,
                productID: val4,
                title2: val3,
                img: val9.replace( "C:\\fakepath\\" , "../../Images/Furniture/" ),
                price: val2
            }
            props.productdata(productinfo);
            console.log(productinfo);
            // const form = $(event.target);
            // $.ajax({
            //     type: "POST",
            //     url: form.attr("action"),
            //     data: form.serialize(),
            //     success(data) {
            //         newresult(data);
            //     },
            // });
            // props.address1(val1);
            // props.address2(val2);
            // props.address3(val3);
            // props.address4(val4);
            // props.address5(val9);
            // console.log('data collected')
            navigate('/');
        }else {
            console.log('Sorry!! Not Data Collect');
        }
    }

    
  return (
    <div className='createaccount'>

                {/* <Link className="" to='/'><img style={{ height: 'auto', width: '165px' }} src={img1} alt="" /></Link> */}
        <div>
            <form action = ""
                method="post" className='create-1' onSubmit={(event) => handlesubmit(event)}>
                <h1>Add Product</h1>
                
                <div className='create-2 a'>
                <label htmlFor="name">Product Name</label><br />
                <input type="text" onChange={changer1} value = {val1} name="name" id="name" />
                <p>{val5}</p>
                </div>

                <div className='create-2 b'>
                    <label htmlFor="email">ProductId</label><br />
                    <input type='number' name="email" onChange={changer2} value = {val4} id="email" />
                    <p>{val6}</p>
                </div>

                <div className='create-2 c'>
                    <label htmlFor="password">Description</label><br />
                    <input type='text' name="password" onChange={changer3} value = {val3} id="password" />
                    <p>{val7}</p>
                </div>

                <div className='create-2 c'>
                    <label htmlFor="password">Price</label><br />
                    <input type='text' name="password" onChange={changer6} value = {val2} id="password" />
                    <p>{val8}</p>
                </div>


                <div className='create-2 d'>
                    <label htmlFor="city">Upload Image</label><br />
                    <input style={{border: 'none'}} type="file" name="city" onChange={changer5}  id="city" />
                    <p style={{fontSize: '12px'}}>{val10}</p>
                </div>

                

           

                <div className='submit'>
                    <button type="submit">Submit</button>
                </div>

                <p className='create-3'>Your Add must be correct </p>
                <h1>{console.log(result)}</h1>            
            </form>
        </div>

    </div>
  )
}

export default Addproduct