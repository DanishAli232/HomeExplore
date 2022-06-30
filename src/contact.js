import { useState } from "react";
import $ from "jquery";
// import "./App.css";
  import axios from 'axios';
function App() {
   //
   const [name, setName] = useState("");
   const [name1, setName1] = useState("");
   const [name2, setName2] = useState("");
   const [result, setResult] = useState("");
 
   const handleChange = (e) => {
       setName(e.target.value);
   };

   const handleChange1 = (e) => {
    setName1(e.target.value);
};

const handleChange2 = (e) => {
    setName2(e.target.value);
};
 
   const handleSumbit = (e) => {
       e.preventDefault();

        //     let formdata = new FormData();
        // formdata.append('val1', name1);
        // const URL = 'https://localhost:8000/file.php';
        // axios.post(URL, formdata)
        // .then(res => console.log(res.data))
        // .catch(err => console.log(err));
       
       const form = $(e.target);
       $.ajax({
           type: "POST",
           url: form.attr("action"),
           data: form.serialize(),
           success(data) {
               setResult(data);
           },
       });
   };
   
  
    return (
        <div className="App">

            <form
                action="http://localhost:8000/file.php"
                method="post"
                onSubmit={(event) => handleSumbit(event)}
            >
                <h1 name = 'newdata' value ='danish'>kkkk</h1>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => handleChange(event)}
                />
                <br />
                <input
                    type="text"
                    id="name"
                    name="email"
                    value={name1}
                    onChange={(event) => handleChange1(event)}
                />
                <br />
                <input
                    type="text"
                    id="name"
                    name="lastname"
                    value={name2}
                    onChange={(event) => handleChange2(event)}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <h1>{console.log(result)}</h1>
        </div>
    );
}
  
export default App;