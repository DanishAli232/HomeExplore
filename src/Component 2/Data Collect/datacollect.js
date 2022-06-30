import './datacollect.css';

import Note from './note';
import { useState } from 'react';
import Note1 from './note1';

const DataCollect = () => {

    // const [ data1 , newdata ] = useState([]);


    // const clickItem = () => {
    //     newdata((prevdata) => {
    //         return {
    //             ...prevdata , note
    //         }
    //     })
    // }

    return (
        <div>
            <div className="data1">
                <h1>Data Collect</h1>
            </div>

            <Note1/>
            
            {
                data1.map(( val , index ) => {
                    return ( <Note
                    key = {index}
                    id = {index}
                    title = {val.title}
                    content = {val.content}
                    />
                    );
                })
            }
            
        </div>
    );
}

export default DataCollect;