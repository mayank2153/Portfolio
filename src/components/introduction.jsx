import React from 'react';

const Introduction = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center text-white px-8 py-4 md:p-0'>
      <h1 className='text-4xl md:text-6xl'>LET ME <span className='text-[#69f8dc]'>INTRODUCE</span> MYSELF</h1>
      <ul className='mt-8 text-md md:text-xl text-left list-disc'>
        <li className="mb-6">Fourth-year undergraduate student at KCC Institute of Technology and Management, Greater Noida, on a thrilling journey in Computer Science and Engineering.</li>
        <li className="mb-6">Thrives on the art of coding with a colorful palette of programming languages.</li>
        <li className="mb-6">Always curious to explore the dynamic world of both frontend and backend technologies.</li>
        <li className="mb-6">Currently embarking on a quest to conquer the realms of data structures and algorithms, seeking to unlock the mysteries of computational sorcery.</li>
        <li className="mb-6">Building WhisperHub, a social media application where users will be able to post anonymously using the MERN stack.</li>
      </ul>
    </div>
  );
};

export default Introduction;
