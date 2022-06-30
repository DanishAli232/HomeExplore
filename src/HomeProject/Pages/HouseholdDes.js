import React from "react";
import "./pages.css";
import img1 from "../../HomeProject/Images/Household Appliances/img1.jfif";
import img2 from "../../HomeProject/Images/Household Appliances/img2.jfif";
import img3 from "../../HomeProject/Images/Household Appliances/img3.jfif";
import img4 from "../../HomeProject/Images/Household Appliances/img4.jfif";
import img5 from "../../HomeProject/Images/Household Appliances/img5.jfif";
import img6 from "../../HomeProject/Images/Household Appliances/img6.jfif";
import img7 from "../../HomeProject/Images/Household Appliances/img7.jfif";
import img8 from "../../HomeProject/Images/Household Appliances/img8.jfif";
import img9 from "../../HomeProject/Images/Household Appliances/download.jfif";
import Kitchen from "./kitchen";
import Household from "./household";
import Nav2 from "../Navigation/navigation";

const HouseholdDes = (props) => {
    const CatData = [
        {
            title: 'Tide',
            img: img1,
            title2: 'Limited Time Offer',
            price: 2000,
            productID: 50
        },
        {
            title: 'Finish',
            img: img2,
            title2: 'Limited Time Offer',
            price: 1000,
            productID: 50
        },
        {
            title: 'Krud Kutter',
            img: img3,
            title2: 'Limited Time Offer',
            price: 1200,
            productID: 50
        },
        {
            title: 'Harpic',
            img: img4,
            title2: 'Limited Time Offer',
            price: 1000,
            productID: 50
        },
        {
            title: 'Simple Green',
            img: img5,
            title2: 'Limited Time Offer',
            price: 900,
            productID: 50
        },
        {
            title: 'Bath & Kitchen',
            img: img6,
            title2: 'Limited Time Offer',
            price: 800,
            productID: 50
        },
        {
            title: 'Tide',
            img: img7,
            title2: 'Limited Time Offer',
            price: 700,
            productID: 50
        },
        {
            title: 'Easy off',
            img: img8,
            title2: 'Limited Time Offer',
            price: 800,
            productID: 50
        },
        {
            title: 'Set',
            img: img9,
            title2: 'Limited Time Offer',
            price: 5000,
            productID: 50
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
        <h1 style = {{textAlign: 'center' , paddingTop: '17px' , fontSize: 'revert'}}>Household Products</h1>
            <div className="row">
         {
             CatData.map((value , index) => {
                 return   <Household
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


export default HouseholdDes