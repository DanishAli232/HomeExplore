import './expense.css';
import ExpenseDate from './expensedate';

const Expense = (props) => {
    
    return (
        <div>
        <div className='expense'>
            <div className = 'expensedata'>
                <div>
                <div>
                   <ExpenseDate
                   data = {props.date}
                   />
                </div>
                <h4>{props.title}</h4>
                </div>
                <h2 className='btn'>${props.amount}</h2>
            </div>
        </div>
        </div>
    );
}

export default Expense;