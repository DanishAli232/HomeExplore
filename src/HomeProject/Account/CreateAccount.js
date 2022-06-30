import React, { useState } from 'react';
import './acount.css';
import img1 from '../Images/img2.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';

const CreateAccount = () => {
    const [ val1 , newchanger1 ] = useState('');
    const [ val2 , newchanger2 ] = useState('');
    const [ val3 , newchanger3 ] = useState('');
    const [ val4 , newchanger4 ] = useState('');
    const [ val5 , newchanger5 ] = useState('');
    const [ val6 , newchanger6 ] = useState('');
    const [ val7 , newchanger7 ] = useState('');
    const [ val8 , newchanger8 ] = useState('');
    const [result , newresult ] = useState('');
    // const [ result , newresult ] = useState('dsadsd');

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

    const handlesubmit = (event) => {
        event.preventDefault();
        let accept0 = '';
        let accept1 = '';
        let accept2 = '';
        let accept3 = '';
        let accept4 = '';
         //     let formdata = new FormData();
         // formdata.append('val1', val1);
         // const URL = 'https://localhost:80/react-backend/';
         // axios.post(URL, formdata)
         // .then(res => console.log(res.data))
         // .catch(err => console.log(err));
        
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

        if(val3 === ''){
            newchanger7('enter your password');
            accept2 = 'no';
        }else if(val3.length < 5){
            newchanger7('password must be greater than 6 characters');
            accept2 = 'no';
        }else {
            newchanger7('');
            accept2 = 'ok';
        }

        if(val4 === ''){
            newchanger8('enter your password');
            accept3 = 'no';
        }else if(val4.length < 5){
            newchanger8('password must be greater than 6 characters');
            accept3 = 'no';
        }else {
            newchanger8('');
            accept3 = 'ok';
        }
        
        if(val3 !== val4){
            newchanger8('password is not same');
            accept4 = 'no';
        }else {
            newchanger8('');
            accept4 = 'ok';
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
            newchanger1('');
            newchanger2('');
            newchanger3('');
            newchanger4('');
            console.log('data collected')
        }else {
            console.log('Sorry!! Not Data Collect');
        }
    }

    const clicker = (event) => {

        // event.preventDefault();
        // let formdata = new FormData();
        // formdata.append('val1', val1);
        // const URL = 'https://localhost:80/react-backend/';
        // axios.post(URL, formdata)
        // .then(res => console.log(res.data))
        // .catch(err => console.log(err));

        
        // const form = $(event.target);
        // $.ajax({
        //     type: "POST",
        //     url: form.attr("action"),
        //     data: form.serialize(),
        //     success(data) {
        //         newresult(data);
        //     },
        // });

   
    }
  return (
    <div className='createaccount'>
                {/* <Link className="" to='/'><img style={{ height: 'auto', width: '165px' }} src={img1} alt="" /></Link> */}
        <div>
            <form action = "http://localhost:8000/server.php"
                method="post" className='create-1' onSubmit={(event) => handlesubmit(event)}>
                <h1>Create Account</h1>
                
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
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" onChange={changer3} value = {val3} id="password" />
                    <p>{val7}</p>
                </div>

                <div className='create-2 d'>
                    <label htmlFor="Re-enter">Re-enter Password</label><br />
                    <input type="password" name="re-enter" onChange={changer4} value = {val4} id="Re-enter" />
                    <p>{val8}</p>
                </div>

                <div className='submit'>
                    <button type="submit" onClick={clicker}>Submit</button>
                </div>

                <p className='create-3'>By creating an account, you agree to HomeExplore Conditions of Use and Privacy Notice.</p>
                <p className='create-3-1'>Already have an account? <Link style={{textDecoration: 'none'}} className="" to='/signin'>Sign In</Link></p>
                <h1>{console.log(result)}</h1>            
            </form>
        </div>

    </div>
  )
}

export default CreateAccount