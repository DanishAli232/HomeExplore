// import { useParams } from "react-router-dom";
import './pages.css';

import React, { useState } from "react";

const User = (props) => {
    
    const [data,newdata] = useState('');
    const [btn , newbtn] = useState("+");
    const clicker = () => {
        console.log(props.id);
        if(btn === "+"){
        newdata(props.desc);
        newbtn("-");
        }else if (btn === "-"){
            newdata("");
            newbtn("+");
        }
    } 



    return (
        <div className="container-fluid">            
      
                     <div className="row">
                         <div className="col-10 mx-auto text-center">
                            <div>
                            
                                <div className='accordian'>
                                    <div className='acc1'>
                                    <h3>{props.ques}</h3>
                                    <button className='btn22' onClick={clicker}>{btn}</button> 
                                    </div>
                                    <div className='acc'>
                                    <h5>{data}</h5>
                                    </div>
                                </div>
                                
                            </div>

                         </div>
                     </div>
                 </div>
          
    );
};

export default User;