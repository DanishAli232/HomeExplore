import { useState } from 'react';
import './form.css';


const Form = () => {
    const [ val , newval ] = useState('');
    const [ para , newpara] = useState('');
    
  

    const changeevent1 = (event) => {
        newval(event.target.value);
    }

    const [ fullname , newfullname ] = useState({
        fname: '',
        lname: '',
        email: ''
    });
    

    const changeevent = (event) => {
        
        
        // let value = event.target.value;
        // let name = event.target.name;

        const { value , name } = event.target;

        // console.log(value);
        // console.log(name);

      
        
            newfullname((preVlue) => {
                // console.log(preVlue);
                return {
                    ...preVlue,
                    [name] : value
                };



            //   if(name == "fname"){
            //       return{
            //           fname: value,
            //           lname: preVlue.lname,
            //           email: preVlue.email
            //     };
                
            // }  else if(name == "lname"){
            //       return{
            //         fname: preVlue.fname,
            //         lname: value,
            //         email: preVlue.email
            //     };
            // } else if(name == "email"){
            //       return{
            //         fname: preVlue.fname,
            //         lname: preVlue.lname,
            //         email: value
            //     };
            // }    
            })
    }


    const submit = (event) => {
        event.preventDefault();
        if(val.length<=10){
             newpara("Your Character is less than 10");
            console.log();
                    
        }
        else{
            newpara('');
        }
    }

    return(
        <div>
            <div>
                <form onSubmit={submit} className='form'>
                <h1>Hello! {fullname.fname} {fullname.lname}</h1>
                <h1>{fullname.email}</h1>
                <input className='form1' name ='fname' type="text" value = {fullname.fname} onChange={changeevent} placeholder='Enter FirstName'></input>
                <input className='form1' name = 'lname' type="text" value = {fullname.lname} onChange={changeevent} placeholder='Enter LastName'></input>
                <input className='form1' name = 'email' type="text" value = {fullname.email} onChange={changeevent} placeholder='Enter Email'></input>
                <input className='form1' name ='name' type="text" value = {val} onChange={changeevent1} placeholder='Enter FirstName'></input>
                <p className = 'pp'>{para}</p>
                <button className='form2'>Click Me 👌</button>
                </form>
            </div>
        </div>
    );
}

export default Form;