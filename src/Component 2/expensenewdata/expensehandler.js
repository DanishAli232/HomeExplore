import ExpenseForm from "./expenseform";
import Expense from "./expenses";


const ExpenseHandler = (props) => {
    const savedata = (data) => {
        const info = {
            ...data,
            key: Math.random()
        }
        // console.log(info);
        props.saved(info);
    }

    const datastore = (data) => {
        props.saved11(data);
    }

    return (
        <div>
             <h2>Expense Detail</h2>
             <ExpenseForm datasave = {savedata}/>

             {
             props.recorddata.map((value , index) => {
                 return <Expense
                    title = {value.title}
                    desc = {value.desc}
                    amount = {value.amount}
                    id ={index}
                    key = {index}
                    saved = {datastore}
                    />
             }
             )
             }
       
             {/* <Expense
            title = {props.recorddata[1].title}
            desc = {props.recorddata[1].desc}
            amount = {props.recorddata[1].amount}
            /> */}
        </div>
    );
} 

export default ExpenseHandler;