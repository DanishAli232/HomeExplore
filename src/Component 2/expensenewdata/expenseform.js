import { useState } from "react";



const ExpenseForm = (props) => {

    const [title, newtitle] = useState('');
    const [desc, newdesc] = useState('');
    const [amount, newamount] = useState('');

    const changer1 = (event) => {
        newtitle(event.target.value);
    }

    const changer2 = (event) => {
        newdesc(event.target.value);
    }

    const changer3 = (event) => {
        newamount(event.target.value);
    }

    const clicker = (event) => {
        event.preventDefault();
        const info = {
            title: title,
            desc: desc,
            amount: amount
        }
        console.log(info);
        props.datasave(info);
        newtitle('');
        newdesc('');
        newamount('');

    }



    return (
        <div>
            <form>
                <input type = 'text' onChange={changer1} placeholder="Enter Title" value = {title}></input>
                <input type = 'text' onChange={changer2} placeholder="Enter Description" value = {desc}></input>
                <input type = 'number' onChange={changer3} placeholder="Enter Amount" value = {amount}></input>
                <button onClick={clicker}>Send Data</button>
            </form>
        </div>
    );
}

export default ExpenseForm;