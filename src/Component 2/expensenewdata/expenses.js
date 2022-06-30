import './expense.css';

const Expense = (props) => {
    const clicker = () => {
        console.log("deletion");
        console.log(props.id);
        props.saved(props.id);
    }
    return (
        <div>
           
            <div className="expense">
            <div className='exp'>
            <div>
            <span className='minus' onClick={clicker}><i class="bi bi-file-minus"></i></span>
            <h4>{props.title}</h4>
            <h5>{props.desc}</h5>
            </div>
            <h5 className='amount'>{props.amount}</h5>
            </div>
            </div>
        </div>
    );
}

export default Expense;