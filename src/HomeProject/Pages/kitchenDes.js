import React from "react";
import "./pages.css";
import img1 from "../../HomeProject/Images/Kitchen Appliances/img1.jfif";
import img2 from "../../HomeProject/Images/Kitchen Appliances/img2.jfif";
import img3 from "../../HomeProject/Images/Kitchen Appliances/img3.jfif";
import img4 from "../../HomeProject/Images/Kitchen Appliances/img4.jfif";
import img5 from "../../HomeProject/Images/Kitchen Appliances/img5.jfif";
import img6 from "../../HomeProject/Images/Kitchen Appliances/img6.jfif";
import img7 from "../../HomeProject/Images/Kitchen Appliances/img7.jfif";
import img8 from "../../HomeProject/Images/Kitchen Appliances/img8.jfif";
import img9 from "../../HomeProject/Images/Kitchen Appliances/img9.jfif";
import Kitchen from "./kitchen";
import Nav2 from "../Navigation/navigation";

const KitchenDes = (props) => {
    const CatData = [
        {
            title: 'Juicer Set',
            img: img1,
            title2: 'Limited Time Offer',
            price: 3000
        },
        {
            title: 'Cooker',
            img: img2,
            title2: 'Limited Time Offer',
            price: 4000
        },
        {
            title: 'Brand New Oven',
            img: img3,
            title2: 'Limited Time Offer',
            price: 10000
        },
        {
            title: 'Brand New Toaster',
            img: img4,
            title2: 'Limited Time Offer',
            price: 2000
        },
        {
            title: 'Brand New Blender',
            img: img5,
            title2: 'Limited Time Offer',
            price: 1000
        },
        {
            title: 'Juicer & Blender Set',
            img: img6,
            title2: 'Limited Time Offer',
            price: 10000
        },
        {
            title: 'Standing Mixer',
            img: img7,
            title2: 'Limited Time Offer',
            price: 7000
        },
        {
            title: 'Standing Mixer',
            img: img8,
            title2: 'Limited Time Offer',
            price: 9000
        },
        {
            title: 'Juicer',
            img: img9,
            title2: 'Limited Time Offer',
            price: 2000
        },
    ]
    
    const datasave = (data) => {
        const data1 = {
            ...data,
        }
        props.savedata2(data1);
        // localStorage.setItem('data', JSON.stringify(data1));
    }

    const savedata = (data) => {
        const data2 = {
            ...data
        }
        props.saved2(data2);
    }

    const datasaved1 = (info) => {
            const data3 = {
                ...info,
                random: Math.floor(Math.random()*100000)
            }
            props.dataa2(data3);
        
    }
  return (
    <div>
         <div className="container-fluid">
             <Nav2/>
      <div className="row">
        <div className="col-10 mx-auto ss">
        <h1 style = {{textAlign: 'center' , paddingTop: '17px' , fontSize: 'revert'}}>Kitchen Products</h1>
            <div className="row">
         {
             CatData.map((value , index) => {
                 return   <Kitchen
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


export default KitchenDes