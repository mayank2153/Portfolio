import React, { useEffect, useState, useRef } from 'react';
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Listen to scroll event and update scrolling state
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className={`navbar flex items-center justify-between text-white h-16 px-10 fixed top-0 w-full transition-all duration-500 z-20 ${scrolling ? 'backdrop-blur-lg bg-opacity-50' : 'bg-transparent'}`}>
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
      <div ref={menuRef} className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} md:opacity-100 md:pointer-events-auto md:flex gap-10`}>
        <Link to="/" className="block md:inline hover:text-gray-300 p-4 md:p-0">Home</Link>
        <a href="#about" className="block md:inline hover:text-gray-300 p-4 md:p-0">About</a>
        <Link to="/projects" className="block md:inline hover:text-gray-300 p-4 md:p-0">Projects</Link>
        <a href="#contact" className="block md:inline hover:text-gray-300 p-4 md:p-0">Contact</a>
        <a href="https://drive.google.com/file/d/11WI5SJgHzI86xRD7yZmqQ3rs1cYwvyfH/view?usp=sharing" target='_blank' rel="noopener noreferrer" className="block md:inline md:border md:border-white md:rounded-md md:p-2 md:hover:bg-gray-800 md:hover:border-gray-800 hover:text-gray-300 p-4  resume-button">Resume</a>
      </div>
    </nav>
  );
}

export default Navbar;
