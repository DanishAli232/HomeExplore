import './list.css';

const TodoList = (props) => {
    return (
        <div>
            
            <li> <span className="btn" onClick={() => {
                props.onselect(props.id);
            }}>❌</span> {props.iitems}</li>
        </div>
    );
}

export default TodoList;