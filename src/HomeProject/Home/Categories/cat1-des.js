import React from "react";
import "./Cat1.css";
import img1 from "../../Images/download (1).jpg";
import img2 from "../../Images/img7.jpg";
import img3 from "../../Images/img8.jpg";
import img4 from "../../Images/img9.jpg";
import Cat1 from "./Cat1";

const Catdes = () => {
    const CatData = [
        {
            title: 'Kitchen & Dining',
            img: img1,
            des: " Feel at home, relax your mind,Your dream, our creation.",
            title2: 'Choose Best For Your Life',
            link: 'dining'
        },
        {
            title: 'Furniture',
            img: img2,
            des: "Twice The Comfort, Twice The Value",
            title2: 'Choose Best For Your Life',
            link: 'furniture'
        },
        {
            title: 'Lighting',
            img: img4,
            des: "Long-lasting lights, to make your future bright",
            title2: 'Choose Best For Your Life',
            link: 'lighting'
        },
        {
            title: 'Home Furnishing',
            img: img3,
            des: " We Don't Make Designs. We Make Designs Better",
            title2: 'Choose Best For Your Life',
            link: 'furnishing'
        },
    ]
  return (
    <div>
         <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto ss">
            <div className="row">
         {
             CatData.map((value , index) => {
                 return   <Cat1 
                 title = {value.title}
                 des = {value.des}
                 img = {value.img}
                 title2 = {value.title2}
                 link = {value.link}
                 key = {index}
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

export default Catdes