import React, { useEffect, useState } from "react";
import "./Cat1.css";

import Item1 from "./item1";

const Item1Des1 = (props) => {

    // const [ products , newproducts ] = useState(CatData);
    
        // const info111 = 1;

            // if(products.productdata !== ''){
                // newproducts(infoo);
                // }
        
     


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
            random: Math.floor(Math.random() * 100000)
        }
        props.dataa(data3);

    }

    const returnVl = (data) => {
        // console.log(data);
        props.returnVl(data);
    }
    console.log(props.productdata);
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto ss">
                        <div className="row">
                            {
                                props.productdata.map((value, index) => {
                                    return <Item1
                                        title={value.title}
                                        img={value.img}
                                        title2={value.title2}
                                        price={value.price}
                                        key={index}
                                        productID={value.productID}
                                        index={index}
                                        datas1={datasave}
                                        data2={savedata}
                                        data3={datasaved1}
                                        returnVl={returnVl}
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


export default Item1Des1