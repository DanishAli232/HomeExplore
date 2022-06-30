// import img1 from '../../Components/Netflix/Images/download (1).jfif';
// import './card.css';

import { useState } from "react";

const Contact = () => {
    const [data,newdata] = useState({
        email:"",
        password: "",
        text: ""
    })

    const inputValue = (event) => {
        const {name,value} = event.target;
        newdata((prevdata) => {
            return {
                ...prevdata,
                [name] : value
            };
        })
    }
    const submitData = (event) => {
        event.preventDefault();
    }

  return (
    <div>
     
      <div className="my-4">
        <h1 className="text-center">Contact Form</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-7 mx-auto">
            <form action="" onSubmit={submitData}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange = {inputValue}
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="password"
                  value={data.password}
                  onChange = {inputValue}
                  placeholder="Enter Password"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="text"
                  value={data.text}
                  onChange = {inputValue}
                  rows="3"
                ></textarea>
              </div>

              <div className="mb-3">
                <button className="btn btn-outline-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
