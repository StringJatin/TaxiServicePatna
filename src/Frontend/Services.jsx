import React from 'react'
import car1 from '../assets/car/car1.jpg'
import car2 from '../assets/car/car2.jpg'
import car3 from '../assets/car/car3.jpg'
import car4 from '../assets/car/car4.jpg'
import car5 from '../assets/car/car5.jpg'
import car6 from '../assets/car/car6.jpg'
import car7 from '../assets/car/car7.jpg'
import car8 from '../assets/car/car8.jpg'
import car9 from '../assets/car/car9.jpg'
import { Link } from 'react-router-dom'
const Services = () => {

  return (
   <>
    <section class="services" id="services">
        <div class="heading">
            <span>Best Services</span>
            <h1>Explore Out Top Rates </h1>
        </div>
        <div class="car">
            <h1>Sedan</h1>
            <div class="services-container">
                <div class="box">
                    <div class="box-img">
                        <img src={car1} alt=""/>
                    </div>
                    <p>3 Pax</p>
                    <h3>No Preferencs</h3>
                  <Link to="/"> <a href="#" class="btn">Book Now</a></Link> 
                </div>
                <div class="box">
                    <div class="box-img">
                        <img src={car7}  alt=""/>
                    </div>
                    <p>4 Pax</p>
                    <h3>Premium luxury Sedan</h3>
                    <a href="#" class="btn">Book Now</a>
                </div>
                <div class="box">
                    <div class="box-img">
                        <img src={car8}  alt=""/>
                    </div>
                    <p>4 Pax</p>
                    <h3>Premium luxury Sedan</h3>
                    <a href="#" class="btn">Book Now</a>
                </div>
            </div>
        </div>
        <div class="car">
            <h1>SUV</h1>
            <div class="services-container">
                <div class="box">
                    <div class="box-img">
                        <img src={car9}  alt=""/>
                    </div>
                    <p>6 Pax</p>
                    <h3>Full Size SUV 6 Seater</h3>
                    <a href="#" class="btn">Book Now</a>
                </div>
                <div class="box">
                    <div class="box-img">
                        <img src={car2}  alt=""/>
                    </div>
                    <p>7 Pax</p>
                    <h3>Full Size SUV 7 Seater</h3>
                    <a href="#" class="btn">Book Now</a>
                </div>
                <div class="box">
                    <div class="box-img">
                        <img src={car3}  alt=""/>
                    </div>
                    <p>6 Pax</p>
                    <h3>Full Size Premium Luxury SUV</h3>
                    <a href="#" class="btn">Book Now</a>
                </div>
            </div>
        </div>
        <div class="car">
            <h1>stretch limousine & Van</h1>
            <div class="services-container">
                <div class="box">
                    <div class="box-img">
                        <img src={car4}  alt=""/>
                    </div>
                    <p>7 Pax</p>
                    <h3>Stretch Limo</h3>
                    <a href="#" class="btn">Book Now</a>
                </div>
                <div class="box">
                    <div class="box-img">
                        <img src={car5}  alt=""/>
                    </div>
                    <p>6 Pax</p>
                    <h3>Mini-Van</h3>
                    <a href="#" class="btn">Book Now</a>
                </div>
                <div class="box">
                    <div class="box-img">
                        <img src={car6}  alt=""/>
                    </div>
                    <p>12 Pax</p>
                    <h3>Sprinter Van</h3>
                    <a href="#" class="btn">Book Now</a>
                </div>
            </div>
        </div>
        

    </section>
   </>
  )
}

export default Services