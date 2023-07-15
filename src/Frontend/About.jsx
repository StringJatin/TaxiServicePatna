import React from 'react'
import carmain from '../assets/car/carmain.png'
// import '../Frontend/style.css'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
        <section class="about" id="about">
        <div class="heading">
            <span>Why to Choose Us?</span>
            <h1>Best Customer Experience</h1>
        </div>
        <div class="about-container">
            <div class="about-img">
                <img src={carmain} alt=""/>
            </div>
            <div class="about-text">
               <span>About Us</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aperiam magnam fuga sunt harum
                    rerum mollitia libero quam necessitatibus commodi, obcaecati laborum optio quaerat facilis!
                    Blanditiis dolores earum officiis veniam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptas saepe sapiente. Accusantium,
                    voluptates quaerat! Hic dolorum quos repellat cupiditate iure illum temporibus et nobis, inventore
                    iste minima reprehenderit pariatur!</p>
                    <Link to="/AboutUs"> <a href="#" class="btn">Learn More</a></Link> 
            </div>
        </div>
    </section>
    </>
  )
}

export default About