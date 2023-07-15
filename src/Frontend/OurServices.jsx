import React from 'react'
import "../Frontend/OurServices.css"
import Navbar from './Navbar'
import Footer from './Footer'
import img1 from "../assets/services1.jpg"
const OurServices = () => {
  return (
    <>
      <Navbar />

      <div className="servicesContainer">
        <div className="servicesHeading">
<<<<<<< HEAD
        <h2 className='servicesTitle'>Book taxi services from Patna Web/App</h2>
        <p className='servicesPara' >Your everyday travel partner - AC Cabs for point to point travel</p>
=======
          <h2 className='servicesTitle'>Book taxi services from SavariMithilaKi Web/App</h2>
          <p className='servicesPara' >Your everyday travel partner - AC Cabs for point to point travel</p>
>>>>>>> f3f6dc2e2c40b1bc73749e411c77ab815e82715f
        </div>
        <div className="cardContainer">
          <div class="card-services">
            <div class="image1">

            </div>
            <div class="content">
              <a href="#">
                <span class="title">
                  Book Outstation Cab with Driver in Patna
                </span>
              </a>

              <p class="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                dolores, possimus pariatur animi temporibus nesciunt praesentium
              </p>

              <a class="action" href="#">
                Find out more
                <span aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
          <div class="card-services">
            <div class="image2"></div>
            <div class="content">
              <a href="#">
                <span class="title">
                  Get online local car rental service
                </span>
              </a>

              <p class="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                dolores, possimus pariatur animi temporibus nesciunt praesentium
              </p>

              <a class="action" href="#">
                Find out more
                <span aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
          <div class="card-services">
            <div class="image3"></div>
            <div class="content">
              <a href="#">
                <span class="title">
                  One way Cab Services
                </span>
              </a>

              <p class="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                dolores, possimus pariatur animi temporibus nesciunt praesentium
              </p>

              <a class="action" href="#">
                Find out more
                <span aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default OurServices
