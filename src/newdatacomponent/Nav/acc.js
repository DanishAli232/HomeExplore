import User from "./user";



const Accordian = (props) => {
    return (
        <div>
            <h1 className="text-center">Accordian</h1>
            {
                props.record.map((data1,index) => {
                    return <User 
                    desc = {data1.desc}
                    ques = {data1.ques}
                    id   = {index}
                    key  = {index}
                    />
                })
            }
        </div>
    );
}
export default Accordian;