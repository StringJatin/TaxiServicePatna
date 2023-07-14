import React, { useState, useEffect } from 'react';
import '../Frontend/CustomerDetails.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { GoogleMap, DirectionsRenderer } from '@react-google-maps/api';
import { Link } from 'react-router-dom';

const CustomerDetails = ({ pickupLocation, dropoffLocation, Name, setName, setEmail, Email, passengers, setPassengers, phone, setPhone }) => {
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState(null);
  const [travelTime, setTravelTime] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    calculateDirections();
  }, []);

  const calculateDirections = () => {
    const directionsService = new window.google.maps.DirectionsService();
    const origin = pickupLocation; // Replace with your origin address
    const destination = dropoffLocation; // Replace with your destination address

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
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
              <input placeholder="" type="text" required="" value={Name} onChange={(e)=> setName(e.target.value)} />
              <label htmlFor="name">Name</label>
            </div>
            <div className="group">
              <input placeholder="" type="email" required="" value={Email} onChange={(e)=> setEmail(e.target.value)} />
              <label htmlFor="email">Email</label>
            </div>
            <div className="group">
              <input placeholder="" type="text" required="" value={phone} onChange={(e)=> setPhone(e.target.value)} />
              <label htmlFor="number">Phone Number</label>
            </div>
            <div className="group" id=''>
              <label htmlFor="passengers">Passengers</label>
              <select name="passengers" id="passengers" value={passengers} onChange={(e)=> setPassengers(e.target.value)} >
                <option value="-Select Passengers-">Select Passengers</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <button type="submit" onClick={handleSubmit} >Submit</button>
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
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h1>Your Trip Summary</h1>
            <div className="customerDetailsModal">
            <p> <strong>PickUp Location:</strong>  {pickupLocation} </p>
            <p> <strong>Destination:</strong>  {dropoffLocation} </p>
            <p> <strong>Name:</strong>  {Name} </p>
            <p> <strong>Email:</strong>  {Email} </p>
            <p> <strong>Phone Number:</strong>  {phone} </p>
            <p> <strong>Passsengers:</strong>  {passengers} </p>
            </div>
            <Link to="/"><button onClick={closeModal}>Close</button></Link> 
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default CustomerDetails;
