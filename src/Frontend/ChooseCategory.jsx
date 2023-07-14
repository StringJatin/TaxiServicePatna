import React from 'react'
import "./Choose-category.css"
import Navbar from './Navbar'
import Footer from './Footer'
import car1 from "../assets/car/choti1.png"
import car2 from "../assets/car/badi1.png"
import car3 from "../assets/car/family1.png"
import { Link } from 'react-router-dom'
const ChooseCategory = () => {
  return (<>
  <Navbar/>
  <h1 className='catheading'>Choose Category</h1>
  <div className="categoryCardContainer">
  
    <div className="categoryCard">
  <div className="content">
    <p className="heading">Choti Sawari <br /> (Mini Car)
    </p>
    <p className="facilities">
    <span className='hidden-text'>4 seater, 4 bags, AC</span>
    </p>
    <div className="para">
      <img src={car2} alt="" />
    </div>
    <Link to="/CustomerDetails"><button className="btn">Book Now</button></Link>
    
  </div>
  
</div>
<div className="categoryCard">
  <div className="content">
    <p className="heading">Badi Sawari <br /> (Sedan Car)
    </p>
    <p className="facilities">
    <span className='hidden-text'>4 seater, 4 bags, AC</span>
    </p>
    <div className="para">
      <img src={car1} alt="" />
    </div>
    <button className="btn">Book Now</button>
    
  </div>
  
</div>
<div className="categoryCard">
  <div className="content">
    <p className="heading">Family Sawari <br />(SUV)
    </p>
    <p className="facilities">
    <span className="hidden-text">4 seater, 4 bags, AC</span>
    </p>
    <div className="para">
      <img src={car3} alt="" />
    </div>
    <button className="btn">Book Now</button>
    
  </div>
  
</div>
</div>
<Footer/>
    </>
  )
}

export default ChooseCategory