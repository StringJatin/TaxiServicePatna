import React, { useState } from 'react';
import logo from '../assets/logo.webp';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import "../Frontend/Navbar.css";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <a href="#" className="logo">
       <Link to="/"> <img src={logo} alt="" /></Link>
      </a>
      <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={handleMenuClick}>
        {menuOpen ? <BiX size={30} /> : <BiMenuAltRight size={30} />}
      </div>
      <div className={`h-menu ${menuOpen ? 'active' : ''}`}>
        <ul className="navbar">
          <li>
            <Link to="/"><a href="#home" onClick={handleMenuClick}>
              Home
            </a></Link>
          </li>
          <li>
           <Link to="/OurServices"> <a href="#services" onClick={handleMenuClick}>
              Services
            </a></Link>
          </li>
          <li>
            <Link to="/AboutUs"><a href="" onClick={handleMenuClick}>
              About Us
            </a></Link>
          </li>
          <li>
           <Link to="/ContactUs" > <a href="#reviews" onClick={handleMenuClick}>
              Contact Us
            </a></Link>
          </li>
        </ul>
      </div>
      <div className="header-btn">
        <a href="#" className="sign-up">
          SignUp
        </a>
        <a href="#" className="sign-in">
          SignIn
        </a>
      </div>
    </header>
  );
};

export default Navbar;
