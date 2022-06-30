import { useEffect, useState } from "react";



const UseEffect = () => {
    const [ val, newval ] = useState(0);
    useEffect(() => {
        document.title = `i pressed ${val} times`;
    } )

    return (
        <div>
            <button onClick={() => {
                newval(val+1);
            }}> Click Me {val}</button>
        </div>
    );
}

export default UseEffect;