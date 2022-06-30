
import { Route } from "react-router-dom";
import About from "./newdatacomponent/Nav/about";
import Contact from "./newdatacomponent/Nav/contact";
import { Routes } from "react-router-dom";
import Home from "./newdatacomponent/Nav/home";
import Nav from "./newdatacomponent/Nav/Navbar/nav";
// import Servicedata from "./newdatacomponent/servicedata";
// import servicefile from "./newdatacomponent/Nav/servicefile";
import Services from "./newdatacomponent/Nav/services";

import Accordian from "./newdatacomponent/Nav/acc";
import record from "./newdatacomponent/Nav/accrecord";
import Cal from "./newdatacomponent/Nav/cALculator/cal";
import { useState } from "react";
import Temp from "./newdatacomponent/Nav/temperature cal/temp";
import Counter from "./newdatacomponent/Nav/Counter/counter";


const vl = [
    {
        val: 1
    },
    {
        val:2
    }
]


const App1 = () => {

    
  
    


    return (
        <div>
            <Nav/>
             <Routes>
                <Route exact path="/"         element = {<Home/>}/>
                <Route exact path="/about"    element = {<About/>}/>
                <Route exact path="/contact/" element = {<Contact/>}/>
                <Route exact path="/services" element = {<Services/>}/>
                <Route exact path="/user"     element = {<Accordian record = {record}/>}/>
                <Route exact path="/cal"      element = {<Cal/>}/>
                <Route exact path="/temp"     element = {<Temp/>}/>
                <Route exact path="/counter"     element = {<Counter/>}/>
            </Routes>

        </div>
    );
}

export default App1;