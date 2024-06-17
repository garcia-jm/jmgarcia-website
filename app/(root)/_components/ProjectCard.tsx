"use client";

import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";
import { useState } from "react";

export interface ProjectProps {
  title: string;
  skills: string[];
  shortDescription: string;
  description: string;
  imgUrl: string[];
}

const ProjectCard = ({
  title,
  skills,
  shortDescription,
  description,
  imgUrl,
}: ProjectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col rounded-[10px] justify-between w-full lg:w-[45%]">
      <ProjectModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        project={{
          title,
          skills,
          description,
          shortDescription,
          imgUrl,
        }}
      />
      <div
        className="flex items-center rounded-md relative overflow-hidden bg-[#3f3f46] h-[150px] md:h-[200px] xl:h-[250px] justify-center w-full mb-6 mx-auto"
        onClick={() => setIsOpen(true)}
      >
        <img
          className="w-full h-[350px] absolute object-fit inset-0 rounded-md px-7 pt-10 md:pt-12 hover:transform hover:rotate-3 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
          src={imgUrl[0]}
          alt="project image"
        />
      </div>
      <div className="flex gap-2 items-center mb-2">
        <div>
          <Reveal>
            <p className="text-[#ebecf3] text-[0.7em] md:text-[1em] 2xl:text-[1.3em] font-bold text-nowrap">
              {title}
              <span className="emerald">.</span>
            </p>
          </Reveal>
        </div>
        <hr className="border-[#828282] w-[100%] border-[1px]" />
      </div>
      <Reveal>
        <p className="flex text-[0.7em] md:text-[0.9em] 2xl:text-[1em] flex-wrap mb-4 tracking-tight">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`text-[#4ade80] hover:underline transition-all ease-in-out duration-300 ${
                index !== skills.length - 1
                  ? "border-r border-[#4ade80] pr-2 mr-2"
                  : ""
              }`}
            >
              {skill}
            </span>
          ))}
        </p>
      </Reveal>
      <Reveal>
        <p className="smoke text-[0.7em] md:text-[0.9em] 2xl:text-[1em] text-justify tracking-tight">
          {shortDescription}
        </p>
      </Reveal>
    </div>
  );
};

export default ProjectCard;
