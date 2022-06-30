

const Slotm = (props) => {
    let x = props.x;
    let y = props.y;
    let z = props.z;

    if( (x===y) && (x===z) ){
        return (
            <div>
                <h1>{x} {y} {z}</h1>
                <h2>Matching</h2>
            </div>
        );
    }else{
        return (
            <div>
                <h1>{x} {y} {z}</h1>
                <h2>Not Matching</h2>
            </div>
        );
    }
}

export default Slotm;