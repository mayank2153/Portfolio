import React from 'react';
import github from "../assets/images/githubIcon.svg";
import linkedin from "../assets/images/linkedinIcon.svg";
import twitter from "../assets/images/twitterIcon.svg";

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row justify-around bg-gray-900 py-8 items-center text-white w-full mt-auto '>
      <p>Designed and Developed by Mayank Sachdeva</p>
      <p>Copyright © 2024 Mayank Sachdeva</p>
      <div className='flex gap-4'>
        <img src={github} className='w-4' alt="Github" />
        <img src={linkedin} className='w-4' alt="LinkedIn" />
        <img src={twitter} className='w-4' alt="Twitter" />
      </div>
    </footer>
  );
}

export default Footer;
