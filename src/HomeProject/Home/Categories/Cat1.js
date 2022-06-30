import React from "react";
import { Link } from "react-router-dom";
import "./Cat1.css";


const Cat1 = (props) => {
  return (
    // <div className="container-fluid">
        <div className="col-md-3">
          <div className="cat1-1">
            <div className="cat1-des1">
              <h4>{props.title}</h4>
              <p>{props.title2}</p>
              <img src={props.img} alt="" />
              <p className="des">
                {props.des}
              </p>
              <span><Link style={{color: 'black',textDecoration: 'none'}} className="" to={`/${props.link}`}>Read More</Link></span>
            </div>
        </div>
        </div>
          
  );
};

export default Cat1;
