// import Slider from "./Components/slider";
// import react, {useState} from "react";
// import Cal from "./Components/cal";
// import netflix from "./Components/Netflix/netflixrecord";
// import Netflixdata from "./Components/Netflix/netflixdata";
// import Amazon1 from "./Components/Netflix/amoviesrecord";
// import Slot from "./Component 2/slot";
// import Timer from "./Component 2/Timer/timer";
// import Event from "./Component 2/Events/event";
// import DataCollect from "./Component 2/Data Collect/datacollect";
// import Increment from "./Component 2/increment/increm";
// import List from "./Component 2/listapp/list";
// import Form from "./Component 2/form/form";

import record from "./Component 2/expensenewdata/expenserecord1";
import Navbar from "./Component 2/NavBar/nav";
// import Contact from "./Component 2/NavBar/pages/contact";
// import About from "./Component 2/NavBar/pages/about";
// import Services from "./Component 2/NavBar/pages/services";
import Covid from "./Component 2/Covid/covid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Slider from "./Component 2/Slider/slider";
// import slideinfo from "./Component 2/Practice/slideinfo";
import Switcher from "./Component 2/colorswithcher/swither";
import Stopwatch from "./Component 2/StopWatch.js/stopwatch";
// import Item from "./Component 2/Practice/item";
// import Expense from "./Component 2/expensenewdata/expenses";
import ExpenseHandler from "./Component 2/expensenewdata/expensehandler";
import itemrecord from "./Component 2/Practice/itemrecord";
import Item1 from "./Component 2/Practice/item1";
import { useState } from "react";
import Animate from "./Component 2/Newfolder/animate";
// import { PermDataSetting } from "@material-ui/icons";

// import UseEffect from "./Component 2/useEffect/useEffect";

// import { createContext, useState } from "react";
// import ContextC from "./Component 2/UseContext/context";
// import Expense from "./Component 2/Expense/expense";
// import ExpenseItem from "./Component 2/Expense/expenseitem";
// import ExpenseRecord from "./Component 2/Expense/expenserecord";



const App = () => {
  
   /*netflix code const [change,change1] = useState("searchmovie");

    const changetext = (event) => {
        change1(event.target.value);
    }

    const click = () => {
        
            let changevalue = change;
        console.log(changevalue);
        
        localStorage.setItem("chhs" , changevalue);
    }

    const daata = [
        {
            chaange: change
        }
    ];
 */

    // const [ newRecord , newAddRecord] = useState(ExpenseRecord);

    // const newdatarecord1 = (dataaa) => {
    //     const expe = [ dataaa, ...newRecord ]
    //     newAddRecord(expe);
    // }

    // const Firstname = createContext();
    // const Lastname = createContext();
    const [data1 , newdata1] = useState(record);
    const [data2, newdata2] = useState(itemrecord);

    const datarecord = (data) => {
        const info = [...data1 , data];
        newdata1(info);
    }

    console.log(itemrecord[0]);
    

    // console.log(data2.length);
    const datarecord1 = (data) => {
        const dd = {
            ...data
        }
        const info = [...data2,dd];
        
        newdata2(info);
        console.log(info);
    }

    const idd = (data1) => {
        console.log("deletion");
        console.log(data1);

        newdata2((prdata) => {
            return prdata.filter((vl,index) => {
                return index !==data1;
            })
        })

    }

    const returndata = (data) => {
        console.log(data);
        newdata1((predata) => {
            return predata.filter((vl,index) => {
                return index !== data;
            })
        })
    }


    return (
        <div>
            {/* <UseEffect/> */}

            <Navbar/>
            <Switcher/>
            {/* <Slider
            detail = {slideinfo}
            /> */}
            <Routes>
                <Route path="/" element = {<Covid/>}/>
                <Route path="/about" element = {<Stopwatch/>}/>
                <Route path="/contact" element = {<ExpenseHandler recorddata = {data1} saved11 = {returndata} saved = {datarecord}/>}/>
                <Route path="/Services" element = {<Item1 record1 = {data2} saved = {datarecord1} iddata = {idd}/>}/>
                <Route path="/list" element = {<Animate/>}/>
            </Routes>

            {/* <Firstname.Provider value = {'Danish'}>
                <Lastname.Provider value = {'Ali'}>
                    <ContextC/>
                </Lastname.Provider>
            </Firstname.Provider> */}
            

            {/* <ExpenseItem
            
            data = {newRecord}
            data1 = {newdatarecord1}
            /> */}

            {/* <DataCollect></DataCollect> */}

            {/* <Increment></Increment> */}

            {/* <List></List> */}

            {/* <Form></Form> */}

            {/* <Event></Event> */}

            {/* <h1>Netflix Movies</h1> */}


            {/* <Timer></Timer> */}





            {/* <input type="text" value={change} onChange={changetext}></input>
            <button onClick={click}>Search</button>
            
            <br></br>
            <br></br>

            <Slot></Slot>f */}
            
            
              {/* <Netflixdata
              search = {daata}
              movies = {netflix}
              movies1 = {Amazon1}
            ></Netflixdata>   */}

            {/* <Cal></Cal> */}
            
        </div>
    );
}

export default App;
// export { Firstname , Lastname };
// export {data2};