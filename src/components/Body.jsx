import React from 'react';
import Navbar from './navbar.jsx';
import LandingPage from './LandingPage.jsx';
import TracingBeam from './tracingbeam.jsx';
import Introduction from './introduction.jsx';
import Footer from './Footer.jsx';

const Body = () => {
  return (
    <div className='w-full'>
      <TracingBeam className='h-full'>
        <LandingPage />
        <Introduction />
      </TracingBeam>
    </div>
  );
}

export default Body;
