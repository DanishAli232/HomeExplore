import { useState } from 'react';
import './list.css';
import TodoList from './listt1';

const List = () => {
    const [val , newval] = useState('');
    const [add , newadd] = useState([]);


    const clicker = () => {
        newadd((preval) => {
            console.log(preval);
            return [...preval,val];
        });
        newval('');
    };

    const changer = (event) => {
        newval(event.target.value);
    }

    const deleteitem = (id) => {
        console.log('deletion');

        newadd((preval) => {
            return preval.filter((arrElem , index) => {
                return index !== id;
            } )
        })
    } 

    return (
        <div className='list'>
            <div className='list1'>
            <h1>ToDo List</h1>
            <div className='list2'>
            <input type = 'text' value={val} placeholder='Add Items' onChange={changer}></input>
            <button onClick={clicker}> + </button>
            </div>
            <ol>
                {
                    add.map((itemval , index) => {

                        return <TodoList
                        id = {index}
                        key = {index}
                        iitems = {itemval}
                        onselect = {deleteitem} 
                        >
                        </TodoList>
                        // return <li>  <button className='btn'> x </button> {itemval}</li>;
                    })
                        
                    
                }
            </ol>
            </div>
        </div>
    );
}

export default List;