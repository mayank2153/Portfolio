import React from "react";
import ProjectComponent from "./ProjectCard.jsx";
const Projects = () => {
  const projectData = [
    {
      imageSrc: "https://res.cloudinary.com/dhrbg2jbi/image/upload/c_fill,ar_16:9/v1728997638/Screenshot_2024-10-15_183620_g7v4dr.png",
      projectName: "inSocial",
      description: `inSocial: Anonymous messaging app with React frontend and Node.js backend. Features secure posts, real-time chat via WebSockets, and live notifications. Privacy-focused design for engaging, worry-free social interaction.`,
      technologies: ["Node js", "Express", "React js", "Tailwind CSS", "WebSockets", "MongoDB", "Google Gemini"],
      github: "https://github.com/mayank2153/inSocial",
      live: "https://insocial.tech"
    },
    {
      imageSrc: "https://res.cloudinary.com/dhrbg2jbi/image/upload/v1729080223/Screenshot_2024-10-16_173245_hvh6zr.png",
      projectName:  "Cravings Cart",
      description:  "Cravings Cart is a food ordering platform designed to provide users with real-time restaurant listings and a seamless food ordering experience. Users can browse restaurants powered by the Swiggy API and easily add, remove, or modify items in their shopping cart. The app enables efficient navigation between pages using React Router DOM, ensuring a smooth and intuitive user journey.",
      description:  "Cravings Cart is a food ordering platform designed to provide users with real-time restaurant listings and a seamless food ordering experience. Users can browse restaurants powered by the Swiggy API and easily add, remove, or modify items in their shopping cart. The app enables efficient navigation between pages using React Router DOM, ensuring a smooth and intuitive user journey.",
      technologies: ["React.js", "Redux", "React Router DOM", "TailwindCSS"],
      github: "https://github.com/mayank2153/Cravings-Cart",
      live: "https://cravingscart.web.app/"
    }
  ]

  return (
    <section id="experience" className="text-white p-10 bg-[#0a192f] mb-16">
      {/* <ProjectComponent
        imageSrc={projectData.imageSrc}
        projectName={projectData.projectName}
        description={projectData.description}
        technologies={projectData.technologies}
      /> */}
      <h2 className="text-xl md:text-3xl font-semibold mb-8 text-teal-400">
        Projects
      </h2>
      {
        projectData.map((d)=>{
          return(
            <ProjectComponent 
            imageSrc={d.imageSrc}
            projectName={d.projectName}
            description={d.description}
            technologies={d.technologies}
            github={d.github}
            live={d.live}
            />
          )
        })
      }
    </section>
  );
};

export default Projects;
