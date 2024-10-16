import React, { useEffect, useState, useRef } from 'react';
// import logo from "../assets/images/logo.png";

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

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar flex items-center justify-between text-[#69f8dc] h-16 px-10 fixed top-0 w-full transition-all duration-500 z-20 ${scrolling ? 'backdrop-blur-lg bg-opacity-50' : 'bg-transparent'}`}>
      {/* Logo */}
      <img src="https://res.cloudinary.com/dhrbg2jbi/image/upload/c_crop,ar_16:9/v1729101205/MS_1_nmve3h.png" alt="Logo" className="w-16 h-auto" />

      {/* Hamburger Menu Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="focus:outline-none"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>

      {/* Menu items */}
      <div ref={menuRef} className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} md:opacity-100 md:pointer-events-auto md:flex gap-10 md:items-center`}>
        <button className="block md:inline hover:text-gray-300 p-4 md:p-0" onClick={() => scrollToSection('home')}>Home</button>
        <button className="block md:inline hover:text-gray-300 p-4 md:p-0" onClick={() => scrollToSection('about')}>About</button>
        <button className="block md:inline hover:text-gray-300 p-4 md:p-0" onClick={() => scrollToSection('work-experience')}>Experience</button>
        <button className="block md:inline hover:text-gray-300 p-4 md:p-0" onClick={() => scrollToSection('projects')}>Projects</button>
        <button className="block md:inline hover:text-gray-300 p-4 md:p-0" onClick={() => scrollToSection('contact')}>Contact</button>
        <a href="https://drive.google.com/file/d/1zCSiv3WH0AzglSYB2ycg9h180exIHXX2/view?usp=sharing" target='_blank' rel="noopener noreferrer" className="block md:inline md:border md:border-white md:rounded-md md:p-2 md:hover:bg-gray-800 md:hover:border-gray-800 hover:text-gray-300 p-4 resume-button">Resume</a>
      </div>
    </nav>
  );
}

export default Navbar;
