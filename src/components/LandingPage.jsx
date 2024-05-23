import React from 'react';
import ChangingText from './changingText';
import profile from "../assets/images/profile.jpg";
import { HoverBorderGradient } from './hoverbordergradient'; 
import github from "../assets/images/githubIcon.svg";
import linkedin from "../assets/images/linkedinIcon.svg";
import twitter from "../assets/images/twitterIcon.svg";
import { CardContainer, CardBody, CardItem } from './3dCard.tsx';

const LandingPage = () => {
  return (
    <div className='md:h-[100vh] py-20 px-10 md:py-40 md:px-20 h-[55vh] mt-20'>
      <div className='flex flex-col md:flex-row justify-between items-center mb-14 gap-8 md:gap-[25px]'>
        <div className='min-w-full md:min-w-[600px]'>
          <h1 className='text-white text-4xl md:text-6xl mb-4 whitespace-nowrap'>Hey There</h1>
          <div className='flex text-3xl md:text-6xl items-center gap-2'>
            <h1 className='text-white'>I'm</h1>
            <h1 className='text-textpink font-bold'>Mayank Sachdeva </h1>
          </div>
          <ChangingText />
        </div>
        <div className='hidden lg:block w-full md:w-auto'>
          <CardContainer className="inter-var w-full md:w-[400px] h-[200px]">
            <CardBody className="">
              <CardItem
                translateZ="20"
                className="text-xl font-bold text-neutral-600 dark:text-white h-[450px] w-full md:w-[350px]"
              >
                <img src={profile} alt="profile" />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>

      <div className='lg:m-0 flex justify-center mt-5'>
        <HoverBorderGradient className="hover-border-gradient ">
          <div className='flex gap-4'>
            <a href="#"><img src={github} alt="Github" className='w-[40px] h-[40px]' /></a>
            <a href="#"><img src={linkedin} alt="LinkedIn" className='w-[40px] h-[40px]' /></a>
            <a href="#"><img src={twitter} alt="Twitter" className='w-[40px] h-[40px]' /></a>
          </div>
        </HoverBorderGradient>
      </div>
      
    </div>
  );
};

export default LandingPage;
