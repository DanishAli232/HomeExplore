import { useState } from "react";
import "./cal.css";

const NewCal = () => {

 

    const [holder,newholder] = useState('');
 

    const [screendata,newscreendata] = useState('');
    const equal1 = () => {
        if(screendata == ''){
            newholder("Enter Value")
        }else{
        newscreendata(eval(screendata));
        }
    }

    const clear1 = () => {
        newscreendata('');
    }

    const screen = (event) => {
        newscreendata(event.target.value);
        console.log(screendata);
    }
   
    const clicker = (event) => {
  
        newscreendata((predata) => {
            console.log(predata)
            return predata+event.target.value;
        })
    }
  
 



    return (
        <div>
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="cal">
                        <section className="cal1">
                        <input type="text" className="screen" placeholder = {holder} value={screendata} onChange={screen} /><br />
                       
                      
                        <button className="show btn1" onClick={clicker} value="7">7</button>
                        <button className="show btn1" onClick={clicker} value="8">8</button>
                        <button className="show btn1" onClick={clicker} value="9">9</button>
                        <button className="btn1">D</button>
                        <button className="btn1">A</button>
                        <br />
                        <button className="show btn1" onClick={clicker} value="4">4</button>
                        <button className="show btn1" onClick={clicker} value="5">5</button>
                        <button className="show btn1" onClick={clicker} value="6">6</button>
                        <button className="show btn2" onClick={clicker} value="/">/</button>
                        <button className="show btn2" onClick={clicker} value="*">*</button>
                        <br />
                        <button className="show btn1" onClick={clicker} value="1">1</button>
                        <button className="show btn1" onClick={clicker} value="2">2</button>
                        <button className="show btn1" onClick={clicker} value="3">3</button>
                        <button className="show btn2" onClick={clicker} value="+">+</button>
                        <button className="show btn2" onClick={clicker} value="-">-</button>
                        <br />
                        <button className="show btn1" onClick={clicker} value="0">0</button>
                        <button className="show btn1" onClick={clicker} value=".">.</button>
                        <button className="show equal btn4" onClick={equal1}>=</button>
                        <button className="show clear btn4" onClick={clear1}>C</button>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewCal;