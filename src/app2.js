import React, { useEffect, useState } from 'react'
import Home from './HomeProject/Home/Home'
// import Nav1s from './HomeProject/Navigation/navigation1'
import Navigation2 from './HomeProject/Navigation/navigation2'
import Navigation3 from './HomeProject/Navigation/navigation3'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Productdetail from './HomeProject/ProductDetail/Productdetail'
import WishDes from './HomeProject/WishList/wishlisthandler'
import CreateAccount from './HomeProject/Account/CreateAccount'
import Signin from './HomeProject/Account/Signin'
// import Contact from './contact'

import './index.css';
import Cart2 from './HomeProject/Pages/Cart/cart2'
import KitchenDes from './HomeProject/Pages/kitchenDes'
import FurnishingDes from './HomeProject/Pages/FurnishingDes'
import FurnitureDes from './HomeProject/Pages/FurnitureDes'
import DiningDes from './HomeProject/Pages/DiningDes'
import LightingDes from './HomeProject/Pages/LightingDes'
import HouseholdDes from './HomeProject/Pages/HouseholdDes'

import CheckoutDes from './HomeProject/Checkout/checkoutdes'
import Address from './HomeProject/Checkout/address'

import Addproduct from './HomeProject/AddProduct/Addproduct'
// import { FullscreenExitRounded } from '@material-ui/icons'
// import $ from "jquery";
import CatData from './HomeProject/Home/Categories/itemsdata'
import Payment from './HomeProject/Payment/payment'

const App2 = () => {

  const [ViewDetail1, newViewDetail] = useState([]);
  const [data2, newdata2] = useState([]);
  const [cartt, newdata3] = useState([]);
  const [data4, newdata4] = useState('');
  const [checkout, newcheckout] = useState([]);
  const [address1, newaddress1] = useState('M Danish');
  const [address2, newaddress2] = useState('balochdanish2020@gmail.com');
  const [address3, newaddress3] = useState('+923420285429');
  const [address4, newaddress4] = useState('Gulshan luqman town 49 tails sargodha, PAF Road, Sargodha, Punjab');
  const [address5 , newaddress5 ] = useState('Sargodha');
  const [totalitem1, newtotalitem] = useState('');
  const [totalamount1, newtotalamount] = useState('');
  const [wishdel, newwishdel] = useState([]);
  
const [ products , newproducts ] = useState({});
  const [amount1, newamount] = useState(0);
  // const [qty1 , newqty] = useState('');
const [Catdata1 , newCatdata1] = useState(CatData);


  const saved = (data) => {
    const dd = {
      ...data,
      id: Math.random()
    }
    newViewDetail(dd);
    // console.log(ViewDetail1)
  }
  console.log(checkout);

  const saved1 = (data) => {
    const data11 = {
      ...data
    }
    const info = [...data2, data11];
    newdata2(info);
  }

  // Return of remove data
  const removedata = (data) => {
    // console.log(data);
    newdata2((prevdata) => {
      return prevdata.filter((cal, index) => {
        return cal.random !== data;
      })
    })
  }

  const returndata = (info) => {
    const dataa = {
      ...info
    }
    const info1 = [dataa, ...cartt]
    newdata3(info1);
    // console.log(cartt);
  }

  const returndata11 = (info) => {
    // console.log(info + "dadad");
    newdata4(info)
  }

  //Kitchen Appliances
  const returnCartInfo3 = (info) => {
    console.log(info);
    const ViewDetail1 = {
      ...info
    }
    const info1 = [ViewDetail1, ...cartt]
    newdata3(info1);
  }

  const returnCartInfo1 = (info) => {
    const data = {
      ...info
    }
    newViewDetail(data);
  }

  const returnCartInfo2 = (info) => {
    console.log(info);
    const data = {
      ...info
    }
    const info1 = [ data , ...data2]
    newdata2(info1);
    console.log(data2);
  }

  const updatecart = (info) => {
    const data = {
      ...info
    }
    const info1 = [data, ...cartt];
    newdata3(info1);
  }

  const cleardata = () => {
    newdata2([]);
  }

  const cart1 = (info) => {
    const data = {
      ...info
    }
    const ViewDetail1 = [data, ...cartt]
    newdata3(ViewDetail1);
    // console.log(cartt);
  }
  
  const checkoutdata = (info1) => {

    newcheckout(info1);
    // console.log(checkout);
  }

  const addressdata1 = (data) => {
    newaddress1(data);
  }

  const addressdata2 = (data) => {
    // console.log(data);
    newaddress2(data);
  }

  const addressdata3 = (data) => {
    newaddress3(data);
  }

  const addressdata4 = (data) => {
    newaddress4(data);
  }

  const addressdata5 = (data) => {
    newaddress5(data);
  }




  const delid = (data) => {
    // console.log(checkout);
    newcheckout((prevdata) => {
      return prevdata.filter((ViewDetail1) => {
        return ViewDetail1.random !== data;
      })

    })

    newdata3((prevdata) => {
      return prevdata.filter((ViewDetail1) => {
        return ViewDetail1.random !== data;
      })
    })

  }

  const totalitem = (data) => {
    newtotalitem(data);
  }

  const totalamount = (data) => {
    newtotalamount(data);
  }

  const tamount = (data) => {
    console.log(data);
    newamount(data);
  }

  const returnVl = (data) => {
    console.log(data);
    const info = {
      id: data
    }
    console.log(info);
    const info2 = [...wishdel, info];
    // const info2 = [info , ...wishdel];
    newwishdel(info2);

    wishdel.map(() => {
      newdata2((prevdata) => {
        return prevdata.filter((val) => {
          return val.productId !== data;
        })
      })
      // newdata2((prevdata) => {
      //   return prevdata.filter((val) => {
      //     return val.productId !== data;
      //   })
      // })
    })
    // console.log(wishdel);

    // newdata2((prevdata) => {
    //   return prevdata.filter((val) => {
    //     return val.random !== data;
    //   })
    // })
  }

  const removerr = (info) => {
    newdata3((prevdata) => {
      return prevdata.filter((data) => {
        return data.random !== info
      })
    })
  }

  const productdata = (data) => {
    const info = {
      ...data
    }
    const info1 = [...Catdata1, info];
    newCatdata1(info1);
    // newproducts(info);
    // console.log(info);
    
  }

  const cartreturninfo = (data) => {
    const data1 = {
      ...data
    }
    const info1 = [data1 , ...cartt]
    newdata3(info1);
  }


  return (
    <div>
      <Navigation2 />
      <Navigation3 data={cartt} cartdata1={data4} />
      {/* <Contact /> */}
      <Routes>
        <Route exact path="/" element={<Home savedata={saved} saved={saved1} returndata1={returndata} productdata1 = {Catdata1} returnVl={returnVl} />} />

        <Route exact path="/about" element={<Productdetail productdata={ViewDetail1} data3 = {cartreturninfo}/>} />

        <Route exact path="/wishlist" element={<WishDes remover={removedata} wishdata={data2} cleardata={cleardata} cart1={cart1} />} />

        <Route exact path="/createaccount" element={<CreateAccount />} />

        <Route exact path="/signin" element={<Signin />} />

        <Route exact path="/appliances" element={<KitchenDes savedata={returnCartInfo1} saved1={returnCartInfo2} dataa2={returnCartInfo3} />} />

        <Route exact path="/furnishing" element={<FurnishingDes savedata={returnCartInfo1} saved1={returnCartInfo2} dataa={returnCartInfo3} />} />

        <Route exact path="/furniture" element={<FurnitureDes savedata={returnCartInfo1} saved1={returnCartInfo2} dataa={returnCartInfo3} />} />

        <Route exact path="/dining" element={<DiningDes savedata={returnCartInfo1} saved1={returnCartInfo2} dataa={returnCartInfo3} />} />

        <Route exact path="/lighting" element={<LightingDes savedata={returnCartInfo1} saved1={returnCartInfo2} dataa={returnCartInfo3} />} />

        <Route exact path="/supplies" element={<HouseholdDes savedata={returnCartInfo1} saved1={returnCartInfo2} dataa={returnCartInfo3} />} />

        <Route exact path="/cart" element={<Cart2 totalamount={totalamount} totalitem={totalitem} cartdata1={cartt} cartItem23={returndata11} cartUpdate={updatecart} checkoutclicker={checkoutdata} removeittem = {removerr}/>} />

        <Route exact path="/checkout" element={<CheckoutDes checkoutdata={checkout} addressdata1={address1} addressdata2={address2} addressdata3={address3} addressdata4={address4} addressdata5 = {address5} delid={delid} totalamount={tamount} />} />

        <Route exact path="/payment" element={<Payment details={checkout} adrs1={address1} adrs2={address2} adrs3={address3} adrs4={address4} adrs5 = {address5} delid={delid} amount1={amount1} />} />

        <Route exact path="/address" element={<Address address1={addressdata1} address2={addressdata2} address3={addressdata3} address4={addressdata4} address5 = {addressdata5}/>} />

        <Route exact path="/addproduct" element={<Addproduct productdata = {productdata}/>} />
      </Routes>
    </div>
  )
}

export default App2