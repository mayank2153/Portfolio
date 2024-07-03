import React from 'react';
import CravingsCart from "../assets/images/CravingsCart.png";
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className='md:flex py-10 md:mt-[190px] md:h-[63vh] mt-[80px]'>
      <div className='md:w-[30%] flex flex-col justify-center items-center border-r-2'>
        <h1 className='text-4xl text-white font-bold'>
          Currently
        </h1>
        <h1 className='text-4xl text-white font-bold'>
          Working On
        </h1>
        <div className='w-full'>
          <ProjectCard
            name="Whisper Hub"
            description="A Social Media App"
            imageLink={CravingsCart}
            liveLink="https://cravingscart.web.app/"
            Github="https://github.com/mayank2153/Cravings-Cart"
          />
        </div>
      </div>
      <div className='md:w-[70%] flex flex-col justify-center items-center'>
        <h1 className='text-4xl text-white font-bold'>Past Projects</h1>
        <div className='flex flex-col md:flex-row justify-between mx-5 md:mx-20 gap-10 md:gap-10 pt-8 w-full'>
          <div className='w-full'>
            <ProjectCard
              name="Cravings Cart"
              description="A Food App"
              imageLink={CravingsCart}
              liveLink="https://cravingscart.web.app/"
              Github="https://github.com/mayank2153/Cravings-Cart"
            />
          </div>
          <div className='w-full'>
            <ProjectCard
              name="Paytm Clone"
              description="A payment App"
              imageLink={CravingsCart}
              liveLink="https://paytm-clone-blond.vercel.app"
              Github="https://github.com/mayank2153/Paytm-Clone"
            />
          </div>
          <div className='w-full'>
            <ProjectCard
              name="Weather App"
              description="A Weather App"
              imageLink={CravingsCart}
              liveLink="https://weather-app-xi-five-70.vercel.app/"
              Github="https://github.com/mayank2153/Weather-App"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
