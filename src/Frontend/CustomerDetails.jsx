import React, { useState, useEffect } from 'react';
import '../Frontend/CustomerDetails.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { GoogleMap, DirectionsRenderer } from '@react-google-maps/api';

const CustomerDetails = ({ pickupLocation, dropoffLocation }) => {
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState(null);
  const [travelTime, setTravelTime] = useState(null);

  useEffect(() => {
    calculateDirections();
  }, []);

  const calculateDirections = () => {
    const directionsService = new window.google.maps.DirectionsService();
    const origin = "Indore"; // Replace with your origin address
    const destination = "Ujjain"; // Replace with your destination address

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
          setDistance(result.routes[0].legs[0].distance.text);
          calculateTravelTime(result.routes[0].legs[0].duration.value);
        }
      }
    );
  };
  const calculateTravelTime = duration => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const formattedTime = `${hours} hours ${minutes} minutes`;
    setTravelTime(formattedTime);
  };

  return (
    <>
      <Navbar />
      <div className="customerContainer">
        <div className="customerCard">
          <span className="title">Booking Details</span>
          <span id=''> <strong> From :</strong> {pickupLocation} </span>
       <span>  <strong>To : </strong>{dropoffLocation} </span> 
          {distance && <p><strong>Distance: </strong> {distance}</p>}
        <span> <strong> Travel Time:</strong> {travelTime}</span>
        
          <form className="form">
            <div className="group">
              <input placeholder="" type="text" required="" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="group">
              <input placeholder="" type="email" required="" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="group">
              <input placeholder="" type="text" required="" />
              <label htmlFor="number">Phone Number</label>
            </div>
            <div className="group" id=''>
              <label htmlFor="passengers">Passengers</label>
              <select name="passengers" id="passengers">
                <option value="-Select Passengers-">Select Passengers</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <button type="submit">Submit</button>
          </form>
         
        </div>
        <div className='mapCustomer'>
          {directions && (
            <div className="map-container">

              <GoogleMap googleMapsApiKey="AIzaSyD5BMc9ScpaPKkEOyBFxUuUjWaGqDpMgu0"
                mapContainerStyle={{ height: '400px' }}
                zoom={12}
                center={directions ? directions.routes[0].legs[0].start_location : null}
              >
                <DirectionsRenderer directions={directions} />
              </GoogleMap>

            </div>
          )}

          {distance && <p className='disabled'>Distance: {distance}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomerDetails;
