import logo from './logo.svg';
import './App.css';
import Navbar from './Frontend/Navbar';
import Home from './Frontend/Home';
import Services from './Frontend/Services';
import About from './Frontend/About';
import Reviews from './Frontend/Reviews';
import Footer from './Frontend/Footer';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChooseCategory from './Frontend/ChooseCategory';
import Sample from './Frontend/Sample';
import CustomerDetails from './Frontend/CustomerDetails';


function App() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [time, setTime] = useState('');


  return (
    <>
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<Home pickupLocation={pickupLocation} setPickupLocation={setPickupLocation} dropoffLocation={dropoffLocation} setDropoffLocation={setDropoffLocation} pickupDate={pickupDate} setPickupDate={setPickupDate} time={time} setTime={setTime} />}/>
        <Route path="/ChooseCategory" element={<ChooseCategory/>}/>
        <Route path='/CustomerDetails' element={<CustomerDetails pickupLocation={pickupLocation}  dropoffLocation={dropoffLocation}/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
