import React from 'react';
import ChangingText from './changingText';
import profile from "../assets/images/profile.jpg";
import { HoverBorderGradient } from './hoverbordergradient'; 
import github from "../assets/images/githubIcon.svg";
import linkedin from "../assets/images/linkedinIcon.svg";
import twitter from "../assets/images/twitterIcon.svg";
import { CardContainer, CardBody, CardItem } from './3dCard.tsx';
import LottieAnimation from './LottieAnimation.jsx';

const LandingPage = () => {
  return (
    <div className='md:h-[100vh] py-20 px-10 md:py-30 md:px-20 h-[90vh] mt-20'>
      <div className='flex flex-col md:flex-row justify-between items-center mb-14 gap-8 md:gap-[25px]'>
        <div className='min-w-full md:min-w-[600px]'>
          <h1 className='text-white text-xl md:text-3 xl mb-4 whitespace-nowrap'>Hey There</h1>
          <div className='text-2xl md:text-6xl items-center gap-2 text-[#e1e8f0]'>
            <h1 className='font-bold'>I'm Mayank Sachdeva </h1>
            <h1 className='font-bold text-[#8691ad] mt-4'>I build things for the web.</h1>
          </div>
          <p className='text-[#8691ad] text-lg mt-4'>I’m a full-stack developer based in India, passionate about turning concepts into fully realized web applications. Whether you're starting a new project or upgrading an existing one, I’ll help shape your vision with clean, structured, and efficient code.</p>
          
        </div>
        
      </div>

      <div className='lg:m-0 flex justify-center md:pt-12'>
        <HoverBorderGradient className="hover-border-gradient ">
          <div className='flex gap-4'>
            <a href="https://github.com/mayank2153" target="_blank"><img src={github} alt="Github" className='w-[40px] h-[40px]' /></a>
            <a href="https://www.linkedin.com/in/mayank-sachdeva-559537224/" target="_blank"><img src={linkedin} alt="LinkedIn" className='w-[40px] h-[40px]' /></a>
            <a href="https://twitter.com/mayankbytes" target="_blank"><img src={twitter} alt="Twitter" className='w-[40px] h-[40px]' /></a>
          </div>
        </HoverBorderGradient>
      </div>
      <LottieAnimation />
    </div>
  );
};

export default LandingPage;
