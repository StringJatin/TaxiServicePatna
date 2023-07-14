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
  const [carCategory,setCarCategory] = useState('');
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [passengers, setPassengers] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home pickupLocation={pickupLocation} setPickupLocation={setPickupLocation} dropoffLocation={dropoffLocation} setDropoffLocation={setDropoffLocation} pickupDate={pickupDate} setPickupDate={setPickupDate} time={time} setTime={setTime} />}/>
        <Route path="/ChooseCategory" element={<ChooseCategory carCategory={carCategory} setCarCategory={setCarCategory} />}/>
        <Route path='/CustomerDetails' element={<CustomerDetails pickupLocation={pickupLocation}  dropoffLocation={dropoffLocation} pickupDate={pickupDate} time={time} carCategory={carCategory} Name={Name} setName={setName} Email={Email} setEmail={setEmail} passengers={passengers} setPassengers={setPassengers} phone={phone} setPhone={setPhone} />}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
