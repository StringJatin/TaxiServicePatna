import React from 'react'
import rev1 from '../assets/rev1.jpg'
import rev2 from '../assets/rev2.jpg'
import rev3 from '../assets/rev3.jpg'
import { star } from 'boxicons';
const Reviews = () => {
  return (
<>
<section class="reviews" id="reviews">
        <div class="heading">
            <span>Reviews</span>
            <h1>What our Customer Says</h1>

        </div>
        <div class="reviews-container">
            <div class="box">
                <div class="rev-img">
                    <img src={rev3} alt="" />
                </div>
                <h2>Elizabeth Goldberg</h2>
                <div class="stars">
                <box-icon name="star" type = "solid"></box-icon>
                <box-icon name="star" type = "solid"></box-icon>
                <box-icon name="star" type = "solid"></box-icon>
                <box-icon name="star" type = "solid"></box-icon>
                <box-icon name="star"></box-icon>
                  
                </div>
                <p>The quality of a good business is how they treat their customers when costumer need your service. I
                    booked an airport pickup for a family vacation online and called a few minutes before the scheduled
                    time to confirm the pickup and they said they were on their way. When the arranged time came and
                    went we started to panic. I called and was told the driver got his vehicles tire flat; however, they
                    had another driver dispatched.They arrived within 15 mins of my call and even upgraded our transport
                    at no extra cost. Will recommend www.torontotaxilimo.ca</p>
            </div>
            <div class="box">
                <div class="rev-img">
                    <img src={rev2} alt="" />
                </div>
                <h2>Henry Smith</h2>
                <div class="stars">
                <box-icon name="star" type = "solid"></box-icon>
                <box-icon name="star" type = "solid"></box-icon>
                <box-icon name="star" type = "solid"></box-icon>
                <box-icon name="star" type = "solid"></box-icon>
                <box-icon name="star"></box-icon>
                </div>
                <p>I am from Toronto my travel to airport and union station is very often and I always use
                    www.torontotaxilimo.ca service because the cars and drivers are very well groomed they are very
                    professional I am using them from last 11 years highly recommended</p>
            </div>
            <div class="box">
                <div class="rev-img">
                    <img src={rev1} alt=""/>
                </div>
                <h2>Mark James</h2>
                <div class="stars">
                <box-icon name="star" type = "solid"></box-icon>
                <box-icon name="star" type = "solid"></box-icon>
                <box-icon name="star" type = "solid"></box-icon>
                <box-icon name="star" type = "solid"></box-icon>
                <box-icon name="star"></box-icon>
                </div>
                <p>I am a very frequent traveler from Toronto airport. I find your service excellent and a great. The
                    taxi service to Toronto Pearson airport was amazing. I always use www.TorontotaxiLimo.ca, they have
                    the most reliable service that I’ve found anywhere. I highly recommend you try them, I am sure after
                    you do it might be nice to give a testimonial too.</p>
            </div>
        </div>
    </section>
</>
    )
}

export default Reviews