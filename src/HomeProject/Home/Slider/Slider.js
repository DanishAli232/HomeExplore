import './Slider.css';


import { useState } from 'react';




const Slider = (props) => {
    const [num , newnum] = useState(0);


    let vl = props.detail.length;
    // console.log(props.detail);
    const clickerleft = () => {
        if(num > 0){
        newnum(num-1);
        console.log(num);
        }else if(num <=0) {
            newnum(vl-1);
        }
    }

    const clickerright = () => {
        if(num == vl-1){
            newnum((prevdata) => {
                return (
                    prevdata - prevdata
                )
            })
        }else {
            newnum((prevdata) => {
                return (
                    prevdata+1
                )
            })
        }
    }

    // setInterval(() => {
        
    //         if(num > 0){
    //             newnum(num-1);
    //             console.log(num);
    //             }else if(num <=0) {
    //                 newnum(vl-1);
    //             }
        
    // }, 2000);

    return (
        <div>
            <div className='slider-container'>
            <div className='slider'>
            <img src={props.detail[num].image}></img>
            <h1 style={{fontSize: '40px'}}>{props.detail[num].title}</h1>
            </div>
                <span className='arrow left' onClick={clickerleft}><i class="bi bi-caret-left"></i></span>
                <span className='arrow right' onClick={clickerright}><i class="bi bi-caret-right"></i></span>
        </div>
        </div>
    );
}

export default Slider;