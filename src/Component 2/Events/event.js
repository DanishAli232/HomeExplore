import './event.css';
import react, { useState } from 'react';


const Event = () => {
    let bg = "red";
    const [ color , newcolor ] = useState(bg);
    const [ name , newname ] = useState("Click Me");

    const clicker = () => {
        newcolor("purple");
        newname("What TH is this 🧒😲😠");
    }

    const doubleclick = () => {
        newcolor("yellow");
        newname("Hurray 😎🤐😱🤯🥶😵🥴😡");
    }

    return(
        <div className='event' style = { { backgroundColor: color } }>
            <button onMouseEnter={clicker} onMouseLeave = {doubleclick}>{name}</button>
        </div>
    );
}

export default Event;