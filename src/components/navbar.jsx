import React, { useEffect, useState } from 'react';
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Listen to scroll event and update scrolling state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dynamic class for navbar background color based on scrolling state
  const navbarBgColor = scrolling ? 'backdrop-blur-lg' : 'bg-opacity-100';

  return (
    <nav className={`flex items-center justify-between text-white h-16 px-10 fixed top-0 w-full z-10 ${navbarBgColor} transition-all duration-500`}>
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-16 h-auto" />

      {/* Hamburger Menu Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>

      {/* Menu items */}
      <div className={`md:flex gap-10 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <Link to="/" className="block md:inline hover:text-gray-300">Home</Link>
        <a href="#" className="block md:inline hover:text-gray-300">About</a>
        <Link to="/projects" className="block md:inline hover:text-gray-300">Projects</Link>
        <a href="#" className="block md:inline hover:text-gray-300">Contact</a>
        <a href="https://drive.google.com/file/d/11WI5SJgHzI86xRD7yZmqQ3rs1cYwvyfH/view?usp=sharing" target='_blank' className="block md:inline md:border md:border-white md:rounded-md md:p-2 md:hover:bg-gray-800 md:hover:border-gray-800 hover:text-gray-300 resume-button">Resume</a>
      </div>
    </nav>
  );
}

export default Navbar;
