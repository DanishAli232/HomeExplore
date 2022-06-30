
import './swithcer.css';

const Switcher = () => {
    const red = () => {
        document.body.style.backgroundColor = "red";
        document.body.style.color = "white";

    }

    const black = () => {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

    }

    const yellow = () => {
        document.body.style.backgroundColor = "yellow";
        document.body.style.color = "white";

    }

    const wheat = () => {
        document.body.style.backgroundColor = "wheat";

    }


    return (
        <div>
            <div className='switch'>
            <span className="red" onClick={red}>R</span>
            <span className="black" onClick={black}>B</span>
            <span className="yellow" onClick={yellow}>Y</span>
            <span className="wheat" onClick={wheat}>W</span>
            </div>
        </div>
    )
}

export default Switcher;