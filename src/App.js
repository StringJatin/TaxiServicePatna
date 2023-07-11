import logo from './logo.svg';
import './App.css';
import Navbar from './Frontend/Navbar';
import Home from './Frontend/Home';
import Services from './Frontend/Services';
import About from './Frontend/About';
import Reviews from './Frontend/Reviews';
import Footer from './Frontend/Footer';
import { useState } from 'react';
function App() {
  const [pickupLocation , setPickupLocation ] = useState('');
  const [dropoffLocation , setDropoffLocation ] = useState('');
  const [pickupDate , setPickupDate ] = useState('');
  const [time , setTime ] = useState('');


  return (
  <>    
  <Navbar/>
  <Home pickupLocation={pickupLocation} setPickupLocation={setPickupLocation} dropoffLocation={dropoffLocation} setDropoffLocation={setDropoffLocation} pickupDate={pickupDate} setPickupDate={setPickupDate} time={time} setTime={setTime} />
  <Services/>
  <About/>
  <Reviews/>
  <Footer/>
  </>
  );
}

export default App;
