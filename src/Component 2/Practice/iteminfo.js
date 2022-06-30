import './item.css';



const Iteminfo = (props) => {
    const clicker = () => {
        // console.log("ok");
        props.savedata(props.id);
        // console.log(props.title1.title);
        
    }

    return (
        <div className='dd'>
            
        <div className="iteminfo">
            <h4><span onClick={clicker} className='minus'><i class="bi bi-file-minus"></i></span>{props.title1.title}</h4>
        </div>
        </div>
    );
}
export default Iteminfo;