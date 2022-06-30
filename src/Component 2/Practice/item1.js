import Item from "./item";
import Iteminfo from "./iteminfo";


const Item1 = (props) => {
    const datasave = (data) => {
        const info = {
            ...data
            // key: Math.random(),
            // id: Math.random()
        }
        props.saved(info)
    }

    const data = (dt1) => {
        const dd = {
            dt1
        }
        console.log(dd);
        props.iddata(dt1);
    }

    return (
        <div>
            <Item savedata = {datasave}/>
           { 
           props.record1.map((title,index) => {
               return <Iteminfo 
               title1 = {title}
               id = {index}
               key = {index}
               savedata = {data}
               />
           }
           )
           
        // console.log(props.data[0])
      
           }
             {/* <Iteminfo title = {props.record1[0].title}/> */}
             {/* <Iteminfo title = {props.record1[1].title}/> */}
        </div>
    );
}

export default Item1;