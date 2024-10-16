import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen.js'; // Import the hook

const WorkExperience = () => {
  const experienceRef = useRef(); // Create a reference for the component
  const isVisible = useOnScreen(experienceRef); // Use the hook

  const experiences = [
    {
      company: 'Antim Pravakta Media',
      position: 'Frontend Developer Intern',
      website: 'https://workik.com',
      duration: 'March 2024 – June 2024',
      responsibilities: [
        'Developed and optimized 3 advanced React UIs, reducing overall load time by 20%.',
        'Led debugging initiatives to ensure smooth functionality and enhance user experience.',
        'Contributed to feature enhancements and implemented new functionalities based on evolving project requirements.',
        'Resolved over 20 high-priority issues, improving application performance by 45%.'
      ]
    }
  ];

  return (
    <section
      ref={experienceRef}
      id="experience"
      className={`text-white px-10 py-20 bg-[#0a192f] mb-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} // Apply dynamic opacity
    >
      <h2 className="text-xl md:text-3xl font-semibold mb-8 text-teal-400">
        Work Experience
      </h2>
      
      {experiences.map((experience, index) => (
        <div key={index} className="mb-12">
          <div className="flex items-center mb-4">
            <h3 className="text-lg md:text-2xl font-bold">
              {experience.position} 
              <span className="text-teal-400"> @ 
                <a href={experience.website} className="hover:underline" target="_blank" rel="noreferrer"> {experience.company}</a>
              </span>
            </h3>
          </div>
          <p className="text-sm md:text-base text-gray-400 mb-6">{experience.duration}</p>

          <ul className="list-disc list-outside pl-5 text-gray-300 space-y-3">
            {experience.responsibilities.map((responsibility, idx) => (
              <li key={idx} className="text-sm md:text-base leading-relaxed">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
