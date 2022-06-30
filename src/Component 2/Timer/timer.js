
import { useState } from 'react';
import './timer.css';





const Timer = () => {
     

    let date = new Date().toLocaleTimeString();
    
    const [timer,newtimer] = useState(date);
    
    const timer1 = () => {
        let date1 = new Date().toLocaleTimeString();
        newtimer(date1);
    }

    

    setInterval(timer1,1000);
    
    return(
        <div className="timer">
            <span>{}</span><br></br>
            <span>{timer}</span><br></br>
            <button onClick={timer1}>Timer</button>
        </div>
    );
}

export default Timer;