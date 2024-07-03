import React from 'react';
import { CardContainer, CardBody, CardItem } from './3dCard.tsx';

const ProjectCard = ({ name, description, imageLink, liveLink, Github }) => {
  return (
    <div className='w-full md:w-auto px-10'>
      <CardContainer className="inter-var w-full md:w-[250px] h-full">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border">
          <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            {name}
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={imageLink}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-4">
            <CardItem
              translateZ={20}
              as="a"
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Project Link
            </CardItem>
            <CardItem
              translateZ={20}
              as="a"
              href={Github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Github
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}

export default ProjectCard;
