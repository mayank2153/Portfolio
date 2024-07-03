import React, { useEffect } from 'react';
import Typed from 'typed.js';

const ChangingText = () => {
  useEffect(() => {
    // Initialize Typed.js instance
    const typeData = new Typed('.role', {
      strings: [
        'Student',
        'Tech Enthusiast',
        'Coder',
        'Full stack Web Developer',
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    // Clean up Typed.js instance when the component unmounts
    return () => {
      typeData.destroy();
    };
  }, []);

  return (
    <div>
      <h1 className='text-white text-2xl sm:text-4xl md:text-6xl mt-4'>
         <span className="role text-lightblue font-bold"></span>
      </h1>
    </div>
  );
};

export default ChangingText;
