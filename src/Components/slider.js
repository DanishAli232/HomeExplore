import React, { useState } from "react";
import './slider.css';

import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';
import img4 from '../Images/img4.jpg';


const Slider = () => {

    let slide = document.getElementsByClassName('slider1');
    slide[0].style.display="block";
    

    

    return (
        <div className="slide-container">
            <div className="slider1">
                <img src={img1} className="slide-img"></img>
                <div className="slider-caption">Caption Text 1</div>
                
            </div>

            <div className="slider1">
                <img src={img2} className="slide-img"></img>
                <div className="slider-caption">Caption Text 2</div>
            </div>

            <div className="slider1">
                <img src={img3} className="slide-img"></img>
                <div className="slider-caption">Caption Text 3</div>
            </div>
 
            <div className="slider1">
                <img src={img4} className="slide-img"></img>
                <div className="slider-caption">Caption Text 4</div>
            </div>

            <span className="arrow left"><i className="bi bi-caret-left"></i></span>
            <span className="arrow right"><i className="bi bi-caret-right"></i></span>

            
        </div>
    );
}

export default Slider;

// reactDom.render("Pakistan", document.getElementById('sl'));

