import React from 'react';
import './acount.css';
import img1 from '../Images/img2.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import $ from 'jquery';
// import { useNavigate } from 'react-router-dom';

const Signin = () => {
    // let navigate = useNavigate();
    const [ val1 , newchanger1 ] = useState('');
    const [ val2 , newchanger2 ] = useState('');
    const [ val3 , newchanger3 ] = useState('');
    const [ val4 , newchanger4 ] = useState('');
    const [result , newresult ] = useState('');
    // const [ result , newresult ] = useState('dsadsd');

    const changer1 = (event) => {
        newchanger1(event.target.value);
    }

    const changer2 = (event) => {
        newchanger2(event.target.value);
    }

    const handlesubmit = (event) => {
        event.preventDefault();
        let accept0 = '';
        let accept1 = '';
        
         //     let formdata = new FormData();
         // formdata.append('val1', val1);
         // const URL = 'https://localhost:80/react-backend/';
         // axios.post(URL, formdata)
         // .then(res => console.log(res.data))
         // .catch(err => console.log(err));
        
         if(val1 === ''){
            newchanger3('enter your name');
            accept0 = 'no';
        }else {
            newchanger3('');
            accept0 = 'ok';
        }

        if(val2 === ''){
            newchanger4('enter your email');
            accept1 = 'no';
        }else{
            newchanger4('');
            accept1 = 'ok';
        }

        if( accept0 === 'ok' && accept1 === 'ok' ){
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
            console.log('data send')
            
        }else {
            console.log('Sorry!! Not Data Collect');
        }
    }


  return (
    <div className='createaccount'>
        
        {/* <Link className="" to='/'><img style={{height: 'auto',width: '165px'}} src={img1} alt="" /></Link> */}
        <div>
        <form action = "http://localhost:8000/server1.php"
                method="post" className='create-1' onSubmit={(event) => handlesubmit(event)}>
                <h1>Sign-In</h1>
                
                <div className='create-2 b'>
                    <label htmlFor="email">E-mail</label><br />
                    <input type="email" name="email" value={val1} onChange={changer1} id="email" />
                    <p>{val3}</p>
                </div>

                <div className='create-2 c'>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" value={val2} onChange={changer2} id="password" />
                    <p>{val4}</p>
                </div>

                <div className='submit'>
                    <button type="submit">Submit</button>
                </div>

                <p className='create-3'>By creating an account, you agree to HomeExplore Conditions of Use and Privacy Notice.</p>
                <p style={{textAlign: 'center'}} className='create-3-1'>New to HomeExplore? </p>
                <button className='btn'><Link style={{textDecoration: 'none',color: 'black', width: '100%'}} className="" to='/createaccount'>Create an Account</Link></button>
            {console.log(result)}    
             </form>
        </div>

    </div>
  )
}

export default Signin