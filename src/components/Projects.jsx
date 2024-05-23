import React from 'react';
import CravingsCart from "../assets/images/CravingsCart.png";
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between mx-5 md:mx-20 my-10 md:my-36 gap-10 md:gap-0'>
      <ProjectCard
        name="Cravings Cart"
        description="A Food App"
        imageLink={CravingsCart}
        liveLink="https://cravingscart.web.app/"
        Github="https://github.com/mayank2153/Cravings-Cart"
      />
      <ProjectCard
        name="Paytm Clone"
        description="A payment App"
        imageLink={CravingsCart}
        liveLink="https://paytm-clone-blond.vercel.app"
        Github="https://github.com/mayank2153/Paytm-Clone"
      />
      <ProjectCard
        name="Weather App"
        description="A Weather App"
        imageLink={CravingsCart}
        liveLink="https://weather-app-xi-five-70.vercel.app/"
        Github="https://github.com/mayank2153/Weather-App"
      />
    </div>
  );
}

export default Projects;
