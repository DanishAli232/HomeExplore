import { useState } from 'react';
import './increm.css';
// import Button from '@material-ui/core/Button'; 
import DeleteIcon from '@material-ui/icons/Delete';
import Add from '@material-ui/icons/Add';
import AnalogClock from 'analog-clock-react';


const Increment = () => {

    let options = {
        width: "100px",
        border: true,
        borderColor: "#2e2e2e",
        baseColor: "#17a2b8",
        centerColor: "#459cff",
        centerBorderColor: "#ffffff",
        handColors: {
          second: "#d81c7a",
          minute: "#ffffff",
          hour: "#ffffff"
        }
    };

    const [ val , newval ] = useState(0);
    

    const increment = () => {
        newval((preval) => {
            return preval+1;
        })
    }

    const decrement = () => {
        if(val>0){
        newval((preval) => {
            return preval-1;
        })
    }
        else{
            newval(0);
        }
    }

    return (
        <div className='incre'>
            <AnalogClock {...options} />
            <div className='incre1'>
            <span>{val}</span>
            <br></br>
            <button onClick={increment} className = "btn1" title = "add"><Add/></button>
            <button onClick={decrement} className="btn2"><DeleteIcon/></button>
            </div>
        </div>
    );
}

export default Increment;