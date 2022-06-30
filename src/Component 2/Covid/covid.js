import { useState } from 'react';
import './covid.css';

const Covid = () => {
    const [ num , newnum ] = useState('');
    return (
        <div className='covid'>
            <h1>Covid 19 Updates</h1>
            <br/>
            <div className='covid1'>
            <table style = {{width: "56%"}}>
            <tr>
                    <td style={{width: ""}}>#</td>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Death</th>
                    <th>Active</th>
        
                </tr>
                <tr style={{backgroundColor: "#ddd"}}>
                    <td></td>
                    <td>World</td>
                    <td>80,434,543</td>
                    <td>981,729</td>
                    <td>54,323</td>
                    <td>25,345,323</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>USA</td>
                    <td>80,434,543</td>
                    <td>981,729</td>
                    <td>54,323</td>
                    <td>25,345,323</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>India</td>
                    <td>80,434,543</td>
                    <td>981,729</td>
                    <td>54,323</td>
                    <td>25,345,323</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Brazil</td>
                    <td>80,434,543</td>
                    <td>981,729</td>
                    <td>54,323</td>
                    <td>25,345,323</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>UK</td>
                    <td>80,434,543</td>
                    <td>981,729</td>
                    <td>54,323</td>
                    <td>25,345,323</td>
                </tr>
                <tr>
                <td>5</td>
                    <td>Turkey</td>
                    <td>80,434,543</td>
                    <td>981,729</td>
                    <td>54,323</td>
                    <td>25,345,323</td>
                </tr>
                <tr>
                <td>6</td>
                    <td>Malayshia</td>
                    <td>80,434,543</td>
                    <td>981,729</td>
                    <td>54,323</td>
                    <td>25,345,323</td>
                </tr>
                <tr>
                <td>7</td>
                    <td>Russia</td>
                    <td>80,434,543</td>
                    <td>981,729</td>
                    <td>54,323</td>
                    <td>25,345,323</td>
                </tr>
                <tr>
                <td>8</td>
                    <td>Canada</td>
                    <td>80,434,543</td>
                    <td>981,729</td>
                    <td>54,323</td>
                    <td>25,345,323</td>
                </tr>
                <tr>
                <td>9</td>
                    <td>Australia</td>
                    <td>80,434,543</td>
                    <td>981,729</td>
                    <td>54,323</td>
                    <td>25,345,323</td>
                </tr>
                <tr>
                <td>10</td>
                    <td>New Zealand</td>
                    <td>80,434,543</td>
                    <td>981,729</td>
                    <td>54,323</td>
                    <td>25,345,323</td>
                </tr>
                <tr>
                <td>11</td>
                    <td>Egypt</td>
                    <td>80,434,543</td>
                    <td>981,729</td>
                    <td>54,323</td>
                    <td>25,345,323</td>
                </tr>
                <tr>
                <td>12</td>
                    <td>France</td>
                    <td>80,434,543</td>
                    <td>981,729</td>
                    <td>54,323</td>
                    <td>25,345,323</td>
                </tr>
            </table>
            </div>

            <br/>
            <h1>Choose {num} value</h1>
            <select value={num} onChange = {(event) => {
                newnum(event.target.value);
            } }>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>


        </div>
    )
}



export default Covid;