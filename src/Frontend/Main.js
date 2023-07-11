import React, { useEffect } from 'react';
import Navbar from './Navbar';
import x from 'boxicons'
const Main = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      '.text, .form-container form, .heading, .ride-container .box, .services-container .box, .about-container .box, .reviews-container, .newsletter .box'
    );

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const handleScroll = () => {
      animatedElements.forEach((element) => {
        if (isInViewport(element)) {
          element.style.animationPlayState = 'running';
          element.style.opacity = 1;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  const handleMenuIconClick = () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('collapsed');
  };

  return (
    <div>
      <div id="menu-icon" onClick={handleMenuClick}></div>
      <nav className="navbar">
        <Navbar/>
      </nav>
      {/* Rest of the HTML content */}
    </div>
  );
};

export default Main;
