import React from "react";
import "./pages.css";
import img1 from "../../HomeProject/Images/Home Furnishing/img1.jfif";
import img2 from "../../HomeProject/Images/Home Furnishing/img2.jfif";
import img3 from "../../HomeProject/Images/Home Furnishing/img3.jfif";
import img4 from "../../HomeProject/Images/Home Furnishing/img4.jfif";
import img5 from "../../HomeProject/Images/Home Furnishing/img5.jfif";
import img6 from "../../HomeProject/Images/Home Furnishing/img6.jfif";
import img7 from "../../HomeProject/Images/Home Furnishing/img7.jfif";
import img8 from "../../HomeProject/Images/Home Furnishing/img8.jfif";
import img9 from "../../HomeProject/Images/Home Furnishing/img9.jfif";
import Kitchen from "./kitchen";
import Furnishing from "./furnishing";
import Nav2 from "../Navigation/navigation";

const FurnishingDes = (props) => {
    const CatData = [
        {
            title: 'Style1',
            img: img1,
            title2: 'Limited Time Offer',
            price: 2000,
            productID: 35        
        },
        {
            title: 'Style2',
            img: img2,
            title2: 'Limited Time Offer',
            price: 4000,
            productID: 36
        },
        {
            title: 'Style3',
            img: img3,
            title2: 'Limited Time Offer',
            price: 3000,
            productID: 37
        },
        {
            title: 'Style4',
            img: img4,
            title2: 'Limited Time Offer',
            price: 3500,
            productID: 38
        },
        {
            title: 'Style5',
            img: img5,
            title2: 'Limited Time Offer',
            price: 5000,
            productID: 39
        },
        {
            title: 'Style6',
            img: img6,
            title2: 'Limited Time Offer',
            price: 8990,
            productID: 40
        },
        {
            title: 'Style7',
            img: img7,
            title2: 'Limited Time Offer',
            price:4060,
            productID: 41
        },
        {
            title: 'Style8',
            img: img8,
            title2: 'Limited Time Offer',
            price: 6500,
            productID: 42
        },
        {
            title: 'Style9',
            img: img9,
            title2: 'Limited Time Offer',
            price: 2000,
            productID: 43
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
             <Nav2 />
      <div className="row">
        <div className="col-10 mx-auto ss">
        <h1 style = {{textAlign: 'center' , paddingTop: '17px' , fontSize: 'revert'}}>Furnishing Products</h1>
            <div className="row">
         {
             CatData.map((value , index) => {
                 return   <Furnishing
                 title =     {value.title}
                 img =       {value.img}
                 title2 =    {value.title2}
                 price =     {value.price}
                 key =       {index}
                 index =     {index}
                 productID = {value.productID}
                 datas1 =    {datasave} 
                 data2 =     {savedata}
                 data3 =     {datasaved1}
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


export default FurnishingDes