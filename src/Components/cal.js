
import {add,minus,mul,div} from './cal1';

const Cal = () => {
    return (
        <div>
            <h1>Simple Calculator Application</h1>
            <p>Sum of two number is {add(4,40)}</p>
            <p>Minus of two number is {minus(40,60)}</p>
            <p>Mul of two number is {mul(60,40)}</p>
            <p>Div of two number is {div(43,8)}</p>
        </div>
    );
}

export default Cal;