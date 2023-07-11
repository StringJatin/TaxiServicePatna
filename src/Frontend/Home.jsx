import React from 'react'
import '../Frontend/style.css'
import hero from '../assets/hero.png'
import {HiLocationMarker} from 'react-icons/hi'
import {BsFillCarFrontFill , BsCheck2Square} from 'react-icons/bs'

const Home = ({pickupLocation,setPickupLocation,dropoffLocation, setDropoffLocation, pickupDate, setPickupDate, time, setTime}) => {
   
  return (
    <>
    <section class="home" id="home">
        <div class="text">
            <h1><span>Looking</span> for<br/> a Taxi in Toronto?</h1>
            <p>Provides cost-effective yet most comfortable & reliable limo service in <br/>Toronto and GTA area. Our
                up-to-date and well- maintained fleet provides you with plenty of options to choose from.
            </p>
        </div>
        <div class="form-container">
            <form action="">
                <div class="input-box">
                    <span>Pick up Location</span>
                    <input type="search" name="" onChange={(e)=>setPickupLocation(e.target.value)} value={pickupLocation} id="" placeholder="Search places"/>
                </div>
                <div class="input-box">
                    <span>Drop off Location</span>
                    <input type="search"  onChange={(e)=>setDropoffLocation(e.target.value)} value={dropoffLocation} name="" id="" placeholder="Search places"/>
                </div>
                <div class="input-box">
                    <span>Pick-up Date</span>
                    <input type="date"   onChange={(e)=>setPickupDate(e.target.value)} name="" id="" placeholder=""/>
                </div>
                <div class="input-box">
                    <span>Pickup time</span>
                    <input type="time" onChange={(e)=>setTime(e.target.value)} value={time} name="" id="" placeholder=""/>
                </div>
                <input type="submit"  value="Submit" class="btn"/>
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
                <i class="bx bxs-map"><HiLocationMarker/></i>
                <h2>
                    Choose route and days </h2>
                <p>
                    Choose a route, date and time of your trip! Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Aut quam neque rerum iusto obcaecati et deleniti adipisci suscipit deserunt, iure sequi
                    necessitatibus provident fugit harum magni, laboriosam quidem alias dignissimos! </p>
            </div>
            <div class="box">
                <i class='bx bxs-car'><BsFillCarFrontFill /></i>
                <h2>
                    Choose a car and extras </h2>
                <p>
                    Choose a car and additional services! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates, praesentium porro, reiciendis aperiam vero fugit nostrum dolore impedit voluptatum
                    laborum eum et at maxime tempora nemo odit rerum reprehenderit expedita.</p>
            </div>
            <div class="box">
                <i class='bx bxs-check-square'><BsCheck2Square/></i>
                <h2>
                    Complete the booking form </h2>
                <p>
                    Fill in a simple booking form and go! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis odit cumque voluptatem. Alias labore, doloribus quam assumenda quod eius ipsam, incidunt
                    modi cupiditate ut asperiores. Libero sed ea quaerat quam.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home