import React from "react";
import "./pages.css";
import img1 from "../../HomeProject/Images/Lighting/img1.jfif";
import img2 from "../../HomeProject/Images/Lighting/img2.jfif";
import img3 from "../../HomeProject/Images/Lighting/img3.jfif";
import img4 from "../../HomeProject/Images/Lighting/img4.jfif";
import img5 from "../../HomeProject/Images/Lighting/img5.jfif";
import img6 from "../../HomeProject/Images/Lighting/img6.jfif";
import img7 from "../../HomeProject/Images/Lighting/img7.jfif";
import img8 from "../../HomeProject/Images/Lighting/img8.jfif";
import img9 from "../../HomeProject/Images/Lighting/img9.jfif";

import Lighting from "./lighting";
import Nav2 from "../Navigation/navigation";

const LightingDes = (props) => {
    const CatData = [
        {
            title: 'Led Bulb',
            img: img1,
            title2: 'Limited Time Offer',
            price: 400,
            productID: 100
        },
        {
            title: 'Set of Bulbs',
            img: img2,
            title2: 'Limited Time Offer',
            price: 900,
            productID: 101
        },
        {
            title: 'New Design Light ',
            img: img3,
            title2: 'Limited Time Offer',
            price: 800,
            productID: 102
        },
        {
            title: 'Ceiling Light',
            img: img4,
            title2: 'Limited Time Offer',
            price: 1800,
            productID: 103
        },
        {
            title: 'Led Bulb',
            img: img5,
            title2: 'Limited Time Offer',
            price: 1090,
            productID: 104
        },
        {
            title: 'Led Light',
            img: img6,
            title2: 'Limited Time Offer',
            price: 2000,
            productID: 105
        },
        {
            title: 'Brand New Light',
            img: img7,
            title2: 'Limited Time Offer',
            price: 2500,
            productID: 106
        },
        {
            title: 'Brand New Light',
            img: img8,
            title2: 'Limited Time Offer',
            price: 3500,
            productID: 107
        },
        {
            title: 'Brand New Light',
            img: img9,
            title2: 'Limited Time Offer',
            price: 4500,
            productID: 108
        },
    ]
    
    const datasave = (data) => {
        const data1 = {
            ...data,
        }
        props.savedata(data1);
        // localStorage.setItem('data', JSON.stringify(data1));
    }

    const savedata = (data) => {
        const data2 = {
            ...data
        }
        props.saved1(data2);
    }

    const datasaved1 = (info) => {
            const data3 = {
                ...info,
                random: Math.floor(Math.random()*100000)
            }
            props.dataa(data3);
        
    }
  return (
    <div>
         <div className="container-fluid">
             <Nav2/>
      <div className="row">
        <div className="col-10 mx-auto ss">
        <h1 style = {{textAlign: 'center' , paddingTop: '17px' , fontSize: 'revert'}}>Lighting Products</h1>
            <div className="row">
         {
             CatData.map((value , index) => {
                 return   <Lighting
                 title = {value.title}
                 img = {value.img}
                 title2 = {value.title2}
                 price = {value.price}
                 key = {index}
                 index = {index}
                 productID = {value.productID}
                 datas1 = {datasave} 
                 data2 = {savedata}
                 data3 = {datasaved1}
                 />
             }
             )
             }
             </div>
             </div>
             </div>
             </div>
    </div>
  )
}


export default LightingDes