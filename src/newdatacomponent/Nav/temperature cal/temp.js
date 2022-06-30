import { useEffect, useRef, useState } from 'react';
import './temp.css';

const Temp = () => {
    const [ data1 , newdata1 ] = useState('');
    const [ data2 , newdata2 ] = useState('');
    const k = useRef(1);
    const changer1 = (event) => {
        newdata1(event.target.value);
        k.current =1;
       
    }

    useEffect(() => {
        if(k.current===1){
        console.log(data1);
        let f=(data1*9/5)+32;
        if(!Number.isInteger(f)){
            f = f.toFixed(4);
            newdata2(f);
        }
    }else if(k.current===2){
        console.log(data2);
        let c=(data2-32)*5/9;
        if(!Number.isInteger(c)){
            c = c.toFixed(4);
            newdata1(c);
        }
    }
    console.log(k.current);
    })

    const changer2 = (event) => {
        newdata2(event.target.value);
        k.current=2;
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                <h1 className='text-center'>Temperature Converter</h1>
                <div className='row temp'>
                    <div className='col-5 temp2 temp1'>
                        <h3>Celsius</h3>
                        <input type="number" value={data1} onChange={changer1} name="" id="" />
                    </div>
                    <div className='col-5 temp3 temp1'>
                        <h3>Fahrenheit</h3>
                        <input type="number" name="" id="" value={data2} onChange={changer2} />
                    </div>

                </div>
                    
                </div>

            </div>
        </div>
    );
}

export default Temp;