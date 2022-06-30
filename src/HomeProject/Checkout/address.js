import React, { useState } from 'react';
import '../Account/acount.css';
import img1 from '../Images/img2.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import CheckoutDes from './checkoutdes';

const Address = (props) => {
    
    const [ val1 , newchanger1 ] = useState('M Danish111');
    const [ val2 , newchanger2 ] = useState('balochdanish2020@gmail.com');
    const [ val3 , newchanger3 ] = useState('+923420285429');
    const [ val4 , newchanger4 ] = useState('Gulshan luqman town 49 tails sargodha, PAF Road, Sargodha, Punjab');
    const [ val5 , newchanger5 ] = useState('');
    const [ val6 , newchanger6 ] = useState('');
    const [ val7 , newchanger7 ] = useState('');
    const [ val8 , newchanger8 ] = useState('');
    const [ val9 , newchanger9 ] = useState('Sargodha');
    const [ val10 , newchanger10 ] = useState('');
    const [result , newresult ] = useState('');
    // const [ result , newresult ] = useState('dsadsd');

    let navigate = useNavigate(); 

    const changer1 = (event) => {
        newchanger1(event.target.value);
    }

    const changer2 = (event) => {
        newchanger2(event.target.value);
    }

    const changer3 = (event) => {
        newchanger3(event.target.value);
    }

    const changer4 = (event) => {
        newchanger4(event.target.value);
    }

    const changer5 = (event) => {
        newchanger9(event.target.value);
    }

    const handlesubmit = (event) => {
        event.preventDefault();
        let accept0 = '';
        let accept1 = '';
        let accept2 = '';
        let accept3 = '';
        let accept4 = '';

  
         if(val1 === ''){
            newchanger5('enter your name');
            accept0 = 'no';
        }else if(val1.length < 5){
            newchanger5('name must be greater than 6 characters');
            accept0 = 'no';
        }else {
            newchanger5('');
            accept0 = 'ok';
        }

        if(val2 === ''){
            newchanger6('enter your email');
            accept1 = 'no';
        }else{
            newchanger6('');
            accept1 = 'ok';
        }

        if(val9 === ''){
            newchanger10('enter your City');
            accept4 = 'no';
        }else{
            newchanger10('');
            accept4 = 'ok';
        }

        if(val3 === ''){
            newchanger7('enter your phone no');
            accept2 = 'no';
        }else if(val3.length < 10){
            newchanger7('wrong phone no');
            accept2 = 'no';
        }else {
            newchanger7('');
            accept2 = 'ok';
        }

        if(val4 === ''){
            newchanger8('enter your home address');
            accept3 = 'no';
        }else {
            newchanger8('');
            accept3 = 'ok';
        }
        
        if(accept0 === 'ok'&&accept1 === 'ok'&&accept2 === 'ok'&&accept3 === 'ok'&&accept4 === 'ok'){
            const form = $(event.target);
            $.ajax({
                type: "POST",
                url: form.attr("action"),
                data: form.serialize(),
                success(data) {
                    newresult(data);
                },
            });
            props.address1(val1);
            props.address2(val2);
            props.address3(val3);
            props.address4(val4);
            props.address5(val9);
            console.log('data collected')
            navigate('/checkout');
        }else {
            console.log('Sorry!! Not Data Collect');
        }
    }

    const clicker = () => {
        // let formData = new FormData();
    
    // Adding files to the formdata
    // formData.append("image", val1);
    // formData.append("name", "Name");
    
    //           //axios
    //           axios({
  
    //             // Endpoint to send files
    //             url: "http://localhost:8000/address.php",
    //             method: "POST",
    //             // Attaching the form data
    //             data: formData
    //           })
            
    //           .then(function (response) {
    //             console.log(response);
    //           })
    //           .catch(function (error) {
    //             console.log(error);
    //           });
            
    }
    
  return (
    <div className='createaccount'>

                {/* <Link className="" to='/'><img style={{ height: 'auto', width: '165px' }} src={img1} alt="" /></Link> */}
        <div>
            <form action = "http://localhost:8000/address.php"
                method="post" className='create-1' onSubmit={(event) => handlesubmit(event)}>
                <h1>Address</h1>
                
                <div className='create-2 a'>
                <label htmlFor="name">Name</label><br />
                <input type="text" onChange={changer1} value = {val1} name="name" id="name" />
                <p>{val5}</p>
                </div>

                <div className='create-2 b'>
                    <label htmlFor="email">E-mail</label><br />
                    <input type="email" name="email" onChange={changer2} value = {val2} id="email" />
                    <p>{val6}</p>
                </div>

                <div className='create-2 c'>
                    <label htmlFor="password">Phone No</label><br />
                    <input type='text' name="password" onChange={changer3} value = {val3} id="password" />
                    <p>{val7}</p>
                </div>

                <div className='create-2 d'>
                    <label htmlFor="city">City</label><br />
                    <input type="text" name="city" onChange={changer5} value = {val9} id="city" />
                    <p style={{fontSize: '12px'}}>{val10}</p>
                </div>

                <div className='create-2 d'>
                    <label htmlFor="Re-enter">Home Address</label><br />
                    <input type="text" name="re-enter" onChange={changer4} value = {val4} id="Re-enter" />
                    <p style={{fontSize: '12px'}}>{val8}</p>
                </div>

           

                <div className='submit'>
                    <button type="submit" onClick={clicker}>Submit</button>
                </div>

                <p className='create-3'>Your Address must be correct </p>
                <h1>{console.log(result)}</h1>            
            </form>
        </div>

    </div>
  )
}

export default Address