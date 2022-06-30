import Expense from "./expense";
import ExpenseForm from "./ExpenseForm";


const ExpenseItem = (props) => {

    const savedata = (data1) => {
        const exp = {
            ...data1,
            id: Math.random()

        }
        
        props.data1(exp);
    } 

  


    return (
        <div className="expeneses1">
            <h1>Expense Data</h1>
            <ExpenseForm onexpensedata = {savedata}/>

            {
                props.data.map(
                    expense => (
                        <Expense
                        amount = {expense.amount}
                        date = {expense.date}
                        title = {expense.title}
                        key = {expense.id}
                        />
                    )
                )
            }









{/*

            <Expense
            amount = {props.data[0].amount}
            date = {props.data[0].date}
            title = {props.data[0].title}
            key = {props.data[0].id}
            />

<Expense
            amount = {props.data[1].amount}
            date = {props.data[1].date}
            title = {props.data[1].title}
            key = {props.data[1].id}
            />

<Expense
            amount = {props.data[2].amount}
            date = {props.data[2].date}
            title = {props.data[2].title}
            key = {props.data[2].id}
            />

<Expense
            amount = {props.data[3].amount}
            date = {props.data[3].date}
            title = {props.data[3].title}
            key = {props.data[3].id}
            />

<Expense
            amount = {props.data[4].amount}
            date = {props.data[4].date}
            title = {props.data[4].title}
            key = {props.data[4].id}
            /> */}
        </div>
    )
}

export default ExpenseItem;