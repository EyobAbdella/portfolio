import React from "react";
import Close from "../../public/close.svg";
import Image from "next/image";
import ProjectImage from "../../public/image.png";

interface ProjectDetailCardProps {
  projectId: number;
  onClose: () => void;
}

const ProjectDetailCard: React.FC<ProjectDetailCardProps> = ({
  projectId,
  onClose,
}) => {
  console.log(projectId);
  return (
    <div className='flex justify-center items-center absolute left-0 h-full w-full bg-[#070719ea]'>
      <div className='max-w-3xl px-5 pb-7 pt-4 space-y-4 bg-[#131329] rounded-2xl'>
        <Image
          className='ml-auto cursor-pointer h-5 w-5 mb-5'
          src={Close}
          alt='close'
          onClick={onClose}
        />
        <Image
          className='w-full rounded-lg'
          src={ProjectImage}
          alt='project-image'
        />
        <h1 className='text-3xl font-semibold'>Project Detail</h1>
        <p className='text-gray-400 '>june 2023 - july 2023</p>
        <div className='flex flex-wrap items-center gap-3'>
          <p className='w-fit rounded-md bg-[#9233ea1c] text-purple-600 text-sm px-3 py-0.5'>
            ReactJs
          </p>
          <p className='w-fit rounded-md bg-[#9233ea1c] text-purple-600 text-sm px-3 py-0.5'>
            Django
          </p>
          <p className='w-fit rounded-md bg-[#9233ea1c] text-purple-600 text-sm px-3 py-0.5'>
            Python
          </p>
          <p className='w-fit rounded-md bg-[#9233ea1c] text-purple-600 text-sm px-3 py-0.5'>
            TailwindCSS
          </p>
        </div>
        <p>
          Developed a full-stack web application that allows users to search
          for, play, and pause their favorite podcasts on demand and create
          podcasts. Implemented user authentication using Google Auth and Jwt
          Auth, made responsive user interface with React JS that provides users
          with a seamless experience across all devices. Practiced agile
          methodologies to optimize team efficiency and communication.
        </p>
        <div className='flex items-center gap-5'>
          <button className='w-1/2 rounded-md py-2.5 bg-slate-800 hover:bg-blue-950'>
            View Code
          </button>
          <button className='w-1/2 rounded-md py-2.5 bg-blue-900 hover:bg-blue-950 duration-200'>
            View Live App
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailCard;
