import React, { useRef } from 'react';
import LandingPage from './LandingPage.jsx';
import {useOnScreen} from '../hooks/useOnScreen.js';

const Body = () => {
  const landingPageRef = useRef(); // Create a ref for LandingPage
  const isVisible = useOnScreen(landingPageRef); // Use the hook

  return (
    <div className="w-full">
      {/* Apply a fade-in effect when the component comes into view */}
      <div
        ref={landingPageRef}
        className={`transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <LandingPage />
      </div>
    </div>
  );
};

export default Body;
