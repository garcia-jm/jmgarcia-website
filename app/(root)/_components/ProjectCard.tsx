"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Reveal from "./Reveal";

interface ProjectCardProps {
  title: string;
  skills: string[];
  description: string;
  imgUrl: StaticImageData[] | string[];
}

const ProjectCard = ({
  title,
  skills,
  description,
  imgUrl,
}: ProjectCardProps) => {
  return (
    <div className="group flex flex-col bg-[#3f3f46] p-6 rounded-[10px] justify-evenly w-full md:w-[45%] hover:scale-110 transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-[#4ade80]">
      <div className="w-[100%] group-hover:w-[80%] group-hover:md:w-[90%] transition-all ease-in-out duration-300 mb-4 m-auto">
        <Carousel>
          <CarouselContent>
            {imgUrl.map((url, index) => (
              <CarouselItem key={index}>
                <Image
                  width={100}
                  height={220}
                  src={typeof url === "string" ? url : url.src}
                  alt="Project"
                  className="w-full h-[220px] xl:h-[500px] 2xl:h-[550px] object-fit"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {imgUrl.length > 1 && (
            <CarouselPrevious className="opacity-0 hidden group-hover:flex group-hover:opacity-100 hover:border-[#4ade80] hover:bg-black hover:text-[#4ade80] transition-all duration-300 ease-in-out" />
          )}
          {imgUrl.length > 1 && (
            <CarouselNext className="opacity-0 hidden group-hover:flex group-hover:opacity-100 hover:border-[#4ade80] hover:bg-black hover:text-[#4ade80] transition-all duration-300 ease-in-out" />
          )}
        </Carousel>
      </div>
      <div className="flex gap-2 items-center mb-2">
        <div>
          <Reveal>
            <p className="text-[#ebecf3] text-[0.7em] md:text-[1em] 2xl:text-[1.5em] font-bold text-nowrap">
              {title}
              <span className="emerald">.</span>
            </p>
          </Reveal>
        </div>
        <hr className="border-[#828282] w-[100%] border-[1px]" />
      </div>
      <Reveal>
        <p className="flex text-[0.7em] md:text-[0.9em] 2xl:text-[1.2em] flex-wrap mb-8">
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
        <p className="smoke text-[0.7em] md:text-[0.9em] 2xl:text-[1.2em] text-justify">
          {description}
        </p>
      </Reveal>
    </div>
  );
};

export default ProjectCard;
