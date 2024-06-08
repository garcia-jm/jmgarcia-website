import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/app/constants/datas";
import Reveal from "./Reveal";
import Header from "./Header";

const Projects = () => {
  return (
    <div className="flex flex-col mb-[20rem]">
      <Header title="Projects" position="right" />
      <div className="flex flex-scol md:flex-row flex-wrap justify-between gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            skills={project.skills}
            description={project.description}
            imgUrl={project.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
