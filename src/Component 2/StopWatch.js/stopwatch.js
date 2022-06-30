import { useState } from 'react';
import './stopwatch.css';

const Stopwatch = () => {
    const [num1 , newnum1] = useState(0);
    const [num2 , newnum2] = useState(0);
    const [num3 , newnum3] = useState(0);
    let timer = 0;
    
    const start = () => {
        timer = 0;
        stopwatch11();

    }

    const stopwatch11 = () => {
        
        const starter = () => {
        if(timer === 1){
            clearInterval(watcher);
            console.log(timer);
            timer =1;
        }else{
            console.log('hy');
            if(timer !== 1){
            newnum3((predata) => {
                return predata+1;
            });
        }
              // setInterval(() => {
        //     newnum3((predata) => {
        //         if(predata == 59){
        //             newnum2((prev) => {
        //                 if(prev == 59){
        //                     newnum1((pre) => {
        //                         return pre+1
        //                     })
        //                     return 0
        //                 }else{
        //                 return prev+1
        //                 }
        //             })
        //             return 0
        //         }else{
        //         return predata+1
        //         }
        //     })
        // }, 10);
        }

      
      
        }
        let watcher = setInterval(starter,10);
        
    }

    const stop1 = () => {
        timer = 1;
        stopwatch11();
        newnum1(num1);
        newnum2(num2);
        newnum3(num3);
    }

    const reset = () => {
        newnum1(0);
        newnum2(0);
        newnum3(0);
    }

    return (
        <div>
            <h1 className='head'>StopWatch</h1>
            <div className='stopwatch'>
             <span>{num1}</span>:
            <span>{num2}</span>:
            <span>{num3}</span>
            </div> 
            <br/>
            <div className='stop-button'>
            <span className='btn start' onClick={start}>Start</span>
            <span className='btn stop' onClick={stop1}>Stop</span>
            <span className='btn restart' onClick={reset}>Reset</span>
            </div>
        </div>
    );
}

export default Stopwatch;