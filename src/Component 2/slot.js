import './slot.css';
import react, {useState} from 'react';
import Slotm from './slotm';


const Slot = () => {
    const [slotval,newslotval] = useState("");
    const slot1 = (event) => {
        newslotval(event.target.value);
    }

    const submit = () => {
        return false;
    }

    return(
    <div>
        <div className='heading-style'>
            <form onSubmit={submit}>
             <input type = 'text' value={slotval} onChange={ slot1 }></input>
             <input type = 'submit'/>
            </form>
            <h1>Welcome To <span style={ {fontWeight: "bold" } }> Slot Machine Game </span>🎄</h1>

            <Slotm x = '😀' y = '😀' z = '😀'/>
            <Slotm x = '😎' y = '😚' z = '😁'/>
            <Slotm x = '🙄' y = '👩' z = '👳'/>
            <Slotm x = '👴' y = '👴' z = '👴'/>
        </div>
        </div>
    );
}

export default Slot;