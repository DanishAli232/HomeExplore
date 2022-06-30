import React from "react";
import "./pages.css";
import img1 from "../../HomeProject/Images/Furniture/img1.jfif";
import img2 from "../../HomeProject/Images/Furniture/img2.jfif";
import img3 from "../../HomeProject/Images/Furniture/img3.jfif";
import img4 from "../../HomeProject/Images/Furniture/img4.jfif";
import img5 from "../../HomeProject/Images/Furniture/img5.jfif";
import img6 from "../../HomeProject/Images/Furniture/img6.jfif";
import img7 from "../../HomeProject/Images/Furniture/img7.jfif";
import img8 from "../../HomeProject/Images/Furniture/img8.jfif";
import img9 from "../../HomeProject/Images/Furniture/img9.jfif";
import Kitchen from "./kitchen";
import Furniture from "./furniture";
import Nav2 from "../Navigation/navigation";

const FurnitureDes = (props) => {
    const CatData = [
        {
            title: 'Brand New Chair',
            img: img1,
            title2: 'Limited Time Offer',
            price: 3000,
            productID: 40
        },
        {
            title: 'Table and Chair Set',
            img: img2,
            title2: 'Limited Time Offer',
            price: 10000,
            productID: 41
        },
        {
            title: 'Brand New Table',
            img: img3,
            title2: 'Limited Time Offer',
            price: 5000,
            productID: 42
        },
        {
            title: 'New Style Chair Set',
            img: img4,
            title2: 'Limited Time Offer',
            price: 30000,
            productID: 43
        },
        {
            title: 'Brand New White Chair',
            img: img5,
            title2: 'Limited Time Offer',
            price: 2000,
            productID: 44
        },
        {
            title: 'Wooden Chair',
            img: img6,
            title2: 'Limited Time Offer',
            price: 4000,
            productID: 45
        },
        {
            title: 'Brand New BedSet',
            img: img7,
            title2: 'Limited Time Offer',
            price: 100000,
            productID: 46
        },
        {
            title: 'Wooden BedSet',
            img: img8,
            title2: 'Limited Time Offer',
            price: 4500,
            productID: 47
        },
        {
            title: 'White BedSet',
            img: img9,
            title2: 'Limited Time Offer',
            price: 50000,
            productID: 48
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
        <h1 style = {{textAlign: 'center' , paddingTop: '17px' , fontSize: 'revert'}}>Furniture Products</h1>
            <div className="row">
         {
             CatData.map((value , index) => {
                 return   <Furniture
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


export default FurnitureDes