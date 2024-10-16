import React, { useRef } from 'react';
import { useOnScreen } from "../hooks/useOnScreen.js"; 

const Introduction = () => {
  const introRef = useRef(); // Create a reference for the component
  const isVisible = useOnScreen(introRef); // Use the hook

  return (
    <div
      ref={introRef}
      className={`h-screen flex flex-col justify-center items-center text-white px-8 py-4 md:p-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} // Apply dynamic opacity
    >
      <h1 className='text-4xl md:text-6xl'>
        LET ME <span className='text-[#69f8dc]'>INTRODUCE</span> MYSELF
      </h1>
      <ul className='mt-8 text-md md:text-xl text-left list-disc'>
        <li className="mb-6">
        Fourth-year undergraduate student pursuing a degree in Computer Science and Engineering at KCC Institute of Technology and Management, Greater Noida.
        </li>
        <li className="mb-6">
        Proficient in a diverse range of programming languages, enabling versatile and creative approaches to software development.
        </li>
        <li className="mb-6">
        Passionate about full-stack development, with a consistent drive to expand knowledge in both frontend and backend technologies.
        </li>
        <li className="mb-6">
        Actively engaged in bridging academic knowledge with practical applications in the field of computer science and engineering.
        </li>
        <li className="mb-6">
        Eager to apply technical skills and problem-solving abilities to real-world challenges in professional settings.
        </li>
      </ul>
    </div>
  );
};

export default Introduction;
