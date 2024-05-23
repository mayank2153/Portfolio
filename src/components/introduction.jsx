import React from 'react';

const Introduction = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center text-white px-8 py-4 md:p-0'>
      <h1 className='text-4xl md:text-6xl'>LET ME <span className='text-textpink'>INTRODUCE</span> MYSELF</h1>
      <ul className='mt-8 text-md md:text-xl text-left list-disc'>
        <li className="mb-6">Third-year undergraduate student at KCC Institute of Technology and Management, Greater Noida, on a thrilling journey in Computer Science and Engineering.</li>
        <li className="mb-6">Thrives on the art of coding with a colorful palette of programming languages, including C++, C, and JavaScript.</li>
        <li className="mb-6">Frontend fanatic with a knack for crafting captivating web experiences using HTML, CSS, and the magical touch of Tailwind CSS.</li>
        <li className="mb-6">Always hungry to explore the dynamic world of both frontend and backend technologies, craving to master the secrets of Full Stack Web Development.</li>
        <li className="mb-6">Currently embarking on a thrilling quest to conquer the realms of data structures and algorithms, seeking to unlock the mysteries of computational sorcery.</li>
        <li className="mb-6">Beyond the binary world, finds solace in the cinematic universe, indulging in the magic of movies, anime adventures, and manga marvels.</li>
        <li className="mb-6">With a heart pulsating with passion and a mind teeming with ideas, eagerly awaits the next adventure in software engineering, ready to leave a trail of innovation and impact.</li>
      </ul>
    </div>
  );
};

export default Introduction;
