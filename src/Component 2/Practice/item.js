
import { useState } from 'react';
import './item.css';
import Item1 from './item1';
import Iteminfo from './iteminfo';






const Item = (props) => {
    const [ val , newval ] = useState('');
    const changer = (event) => {
        newval(event.target.value);
    }
    
    const clicker = () => {
        const info = {
            title: val
        }
        props.savedata(info);
        newval('');
    }
    


    return (
        <div className='item'>
            <div>
            <input className="int" value={val} type = 'text' onChange={changer}></input>
            <span className="btn1" onClick={clicker}><i class="bi bi-file-plus"></i></span>
            </div>
        </div>
    );
}

export default Item;