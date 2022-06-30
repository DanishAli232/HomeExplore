import React from "react";
import "./pages.css";
import img1 from "../../HomeProject/Images/Dining/download.jfif";
import img2 from "../../HomeProject/Images/Dining/images (1).jfif";
import img3 from "../../HomeProject/Images/Dining/images.jfif";
import img4 from "../../HomeProject/Images/Dining/img2.jfif";
import img5 from "../../HomeProject/Images/Dining/img3.jfif";
import img6 from "../../HomeProject/Images/Dining/img4.jfif";
import img7 from "../../HomeProject/Images/Dining/img5.jfif";
import img8 from "../../HomeProject/Images/Dining/img6.jfif";
import img9 from "../../HomeProject/Images/Dining/img8.jfif";

import Dining from "./dining";
import Nav2 from "../Navigation/navigation";

const DiningDes = (props) => {
    const CatData = [
        {
            title: 'Kitchen Dining Table',
            img: img1,
            title2: 'Limited Time Offer',
            price: 20000,
            productID: 26
        },
        {
            title: 'Wooden Dining Table',
            img: img2,
            title2: 'Limited Time Offer',
            price: 10000,
            productID: 27,
            
        },
        {
            title: 'Glass Dining Table',
            img: img3,
            title2: 'Limited Time Offer',
            price: 9000,
            productID: 28
        },
        {
            title: 'Wooden Dining Table',
            img: img4,
            title2: 'Limited Time Offer',
            price: 11000,
            productID: 29
        },
        {
            title: 'Dining Chair',
            img: img5,
            title2: 'Limited Time Offer',
            price: 2000,
            productID: 30
        },
        {
            title: 'New Dining Table',
            img: img6,
            title2: 'Limited Time Offer',
            price: 12000,
            productID: 31
        },
        {
            title: 'Dining Set',
            img: img7,
            title2: 'Limited Time Offer',
            price: 7000,
            productID: 32
        },
        {
            title: 'Dining Chairs',
            img: img8,
            title2: 'Limited Time Offer',
            price: 4000,
            productID: 33
        },
        {
            title: 'Single Chair',
            img: img9,
            title2: 'Limited Time Offer',
            price: 1000,
            productID: 34
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
            <h1 style = {{textAlign: 'center' , paddingTop: '17px' , fontSize: 'revert'}}>Dining Products</h1>
            <div className="row">
         {
             CatData.map((value , index) => {
                 return   <Dining
                 title = {value.title}
                 img = {value.img}
                 title2 = {value.title2}
                 price = {value.price}
                 productID ={value.productID}
                 key = {index}
                 index = {index}
                 
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


export default DiningDes
