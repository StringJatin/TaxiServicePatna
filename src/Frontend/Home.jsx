import React, { Children } from 'react'
import { useEffect, useState } from 'react';
import '../Frontend/style.css'
import hero from '../assets/hero.png'
import {HiLocationMarker} from 'react-icons/hi'
import {BsFillCarFrontFill , BsCheck2Square} from 'react-icons/bs'
import Services from './Services'
import About from './About'
import Reviews from './Reviews'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Autocomplete from 'react-google-autocomplete';

const Home = ({pickupLocation,setPickupLocation,dropoffLocation, setDropoffLocation, pickupDate, setPickupDate, time, setTime}) => {

   
  return (
    <>
     <Navbar />
    <section class="home" id="home">
        <div class="text">
            <h1 className=''><span>Looking</span> for<br/> a Taxi in Toronto?</h1>
            <p>Provides cost-effective yet most comfortable & reliable limo service in <br/>Toronto and GTA area. Our
                up-to-date and well- maintained fleet provides you with plenty of options to choose from.
            </p>
        </div>
        <div class="form-container">
            <form >
                <div class="input-box">
                    <span>Pick up Location</span>
                    <Autocomplete
          apiKey="AIzaSyD5BMc9ScpaPKkEOyBFxUuUjWaGqDpMgu0" onChange={(e)=>setPickupLocation(e.target.value)}
          onPlaceSelected={(place) => setPickupLocation(place.formatted_address)}
          value={pickupLocation}
          options={{
            types: ['geocode'],
          }}
        />
                </div>
                <div class="input-box">
                    <span>Drop off Location</span>
                    <Autocomplete
          apiKey="AIzaSyD5BMc9ScpaPKkEOyBFxUuUjWaGqDpMgu0" onChange={(e)=>setDropoffLocation(e.target.value)}
          onPlaceSelected={(place) => setDropoffLocation(place.formatted_address)}
          value={dropoffLocation}
          options={{
            types: ['geocode'],
          }}
        />
                </div>
                <div class="input-box">
                    <span>Pick-up Date</span>
                    <input type="date"   onChange={(e)=>setPickupDate(e.target.value)} name="" id="" placeholder=""/>
                </div>
                <div class="input-box">
                    <span>Pickup time</span>
                    <input type="time" onChange={(e)=>setTime(e.target.value)} value={time} name="" id="" placeholder=""/>
                </div>
                
                <Link to={"/ChooseCategory"}><button className='btn'>Submit</button></Link>
               
            </form>
        </div>
    </section>
    <section class="ride" id="ride">
        <div class="heading">
            <span>How Its work?</span>
            <h1>Book in 3 Easy Steps</h1>
        </div>
        <div class="ride-container">
            <div class="box">
              <div className='bx'>  <HiLocationMarker/></div>
                <h2 className='' >
                    Choose route and days </h2>
                <p>
                    Choose a route, date and time of your trip! Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Aut quam neque rerum iusto obcaecati et deleniti adipisci suscipit deserunt, iure sequi
                    necessitatibus provident fugit harum magni, laboriosam quidem alias dignissimos! </p>
            </div>
            <div class="box">
            <div className='bx bxs-car'>   <BsFillCarFrontFill /> </div>
                <h2>
                    Choose a car and extras </h2>
                <p>
                    Choose a car and additional services! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates, praesentium porro, reiciendis aperiam vero fugit nostrum dolore impedit voluptatum
                    laborum eum et at maxime tempora nemo odit rerum reprehenderit expedita.</p>
            </div>
            <div class="box">
            <div className='bx'>   <BsCheck2Square/> </div>
                <h2>
                    Complete the booking form </h2>
                <p>
                    Fill in a simple booking form and go! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis odit cumque voluptatem. Alias labore, doloribus quam assumenda quod eius ipsam, incidunt
                    modi cupiditate ut asperiores. Libero sed ea quaerat quam.</p>
            </div>
        </div>
    </section>
    <Services />
      <About />
      <Reviews />
      <Footer />
    </>
  )
}

export default Home