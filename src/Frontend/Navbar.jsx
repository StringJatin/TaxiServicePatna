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
            <a href="#home" onClick={handleMenuClick}>
            <Link to="/"> Home</Link>
            </a>
          </li>
          <li>
            <a href="#services" onClick={handleMenuClick}>
            <Link to="/OurServices">Services</Link>
            </a>
          </li>
          <li>
            <a href="" onClick={handleMenuClick}>
            <Link to="/AboutUs"> About Us</Link>
            </a>
          </li>
          <li>
            <a href="#reviews" onClick={handleMenuClick}>
            <Link to="/ContactUs" > Contact Us </Link>
            </a>
          </li>
          <li>
            <a href="#" onClick={handleMenuClick}>
              Blogs
            </a>
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
