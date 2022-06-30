import './datacollect.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';

const Note1 = (props) => {
    // const [ data1 , newdata ] = useState([]);
    

    const [ note , newnote ] = useState({
            title: "",
            content: ""
    }
    )

    const changeinput = (event) => {
        const { name , value } = event.target;

        newnote((predata) => {
            return {
                ...predata,
                [name] : value
            };
        });
    };

    const clickItem = () => {
        props.passnote;
    }

    return (
        <div>
             <div className='data3'>
            <div className='data2'>
                <form>
                    <input type = 'text' placeholder='Title' value={note.title} onChange={changeinput} name = 'title' autoComplete='off'></input>
                    <textarea rows = '' column = '20' value={note.content} onChange={changeinput} name = 'content' placeholder='Write a Note'></textarea>
                    <Button className='btn' onClick={clickItem}><AddIcon/></Button>
                </form>
            </div>
            
            </div>
        </div>
    );
}

export default Note1;