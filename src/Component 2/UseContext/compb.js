import { useContext } from "react";
import { Firstname , Lastname } from "../../app";


const ContextB = () => {
    const fname = useContext(Firstname);
    const lname = useContext(Lastname);
    return (
        <div>
            <h1>My Name is {fname} {lname}</h1>
        </div>
    );
}

export default ContextB;