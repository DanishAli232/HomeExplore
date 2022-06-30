
import { useState } from "react";


const ExpenseForm = (props) => {
    const [ val , newval ] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const changevalue = (event) => {
        const value = event.target.value;
        const name =event.target.name;

        newval((prevdata) => {
            return {
                ...prevdata,
                [name]: value
            };
        })
    }

    const clicker = (event) => {
        event.preventDefault();

        const expenses = {
            title: val.title,
            amount: val.amount,
            date: new Date(val.date),
            key: Math.random()
        }

        props.onexpensedata(expenses);

        console.log(expenses);
        newval(() => {
            return {
                title: '',
                amount: '',
                date: ''
            }
        })
    }

    return (
        <div>
            <form >
                <label>Title:</label><br></br>
                <input type='text' placeholder = 'Enter Title' onChange = {changevalue} value = {val.title} name = 'title'></input><br></br>
                <label>Amount:</label><br></br>
                <input type = 'number' min = '0.01' step = '0.01' onChange = {changevalue} value={val.amount} name = 'amount' placeholder="Enter Amount"></input><br></br>
                <label>Date:</label><br></br>
                <input type = 'date' value={val.date} onChange = {changevalue} name = 'date'></input><br></br>
                <input onClick={clicker} type="submit"></input> <br></br>
            </form>
        </div>
    );
}

export default ExpenseForm;