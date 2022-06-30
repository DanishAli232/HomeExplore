import { useEffect, useState } from 'react';
import './counter.css';


const Counter = () => {
    const [ val , newval ] = useState('');
    const [ charr, newcharr ] = useState(0);
    const [ word1 , newword] = useState(0);
    const counterchange = (event) => {
        newval(event.target.value);
        console.log(val);
      
    }

    useEffect(() => {
        newcharr(val.length);
        let valuechar = val.trim();
        valuechar = valuechar.split(" ");
        // console.log(valuechar);
        let filter = valuechar.filter((val) => {
            return val!="";
        })
        console.log(filter);
        newword(filter.length);
    })


    return (
        <div className='container-fluid'>
            <div className='row dd'>
                <div className='col-10 mx-auto'>
                    <div className='textarea-1'>
                    <h1>Word Counter</h1>
                    <textarea name="textt" className="textt" onChange={counterchange} value={val} cols="60" rows="10"></textarea>
                    <div className='textarea-2'>
                        <h3>Words:</h3><span className='words'>{word1}</span>
                        <h3>Characters:</h3><span className='char'>{charr}</span>
                    </div>          
                </div>
                </div>
            </div>
            
        </div>
    );
}

export default Counter;