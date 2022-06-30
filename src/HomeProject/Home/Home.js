import React from 'react'
import Nav1s from '../Navigation/navigation1'
import Catdes from './Categories/cat1-des'
import Slider from './Slider/Slider'
import slideinfo from './Slider/sliderinfo1'
import './home.css';
import Cat2 from './Categories/cat2'
import Item1Des1 from './Categories/item1-des'
// import Navigation2 from '../Navigation/navigation2'
// import Navigation3 from '../Navigation/navigation3'


const Home = (props) => {
  const saved = (data) => {
    const saved = {
      ...data
    }
    props.savedata(saved);
  }

  const saveddata = (data) => {
    const data1 = {
      ...data
    }
    props.saved(data1);
  }

  const datasaved = (info) => {
    const dataa = {
      ...info
    }
    props.returndata1(dataa);
  }

  const returnVl = (data) => {
    console.log(data);
    props.returnVl(data);
  }
  console.log(props.productdata1);
  return (
    <div>
              {/* <Navigation2 /> */}
        {/* <Navigation3 /> */}
        
        <Slider 
        detail = {slideinfo}
        />
        <Nav1s />
        <h3 className='head'>Popular Categories</h3>
        <Catdes />
        <Cat2 />
        <h3 className='head1'>Feature Product</h3>
        <Item1Des1 savedata = {saved} saved1 = {saveddata} dataa = {datasaved} returnVl = {returnVl} productdata = {props.productdata1}/>
    </div>
  )
}

export default Home