import React from "react";
import ProjectCard from "./ProjectCard";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className='space-y-8'>
      <h1 className='text-3xl font-semibold text-center'>PROJECTS</h1>
      <div className='flex flex-wrap justify-center gap-10'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
