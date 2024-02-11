"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetailCard from "./ProjectDetailCard";

type Props = {};

const Projects = (props: Props) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  return (
    <div id='projects' className='space-y-8'>
      <h1 className='text-3xl font-semibold text-center'>PROJECTS</h1>
      <div className='max-w-xl mx-auto'>
        <p className='text-center mb-5 text-gray-400 text-xl'>
          I have experience working on various web development projects. Below
          are some of the I&apos;ve worked on.
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-10'>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} onClick={() => setSelectedProject(index)}>
            <ProjectCard />
          </div>
        ))}
        {selectedProject && (
          <ProjectDetailCard
            projectId={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
