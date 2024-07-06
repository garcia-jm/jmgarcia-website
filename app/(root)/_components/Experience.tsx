import React from "react";
import Header from "./Header";
import { experiences } from "@/app/constants/datas";
import Reveal from "./Reveal";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Experience = () => {
  return (
    <section className="mb-[20rem]">
      <MaxWidthWrapper>
        <Header title="Experience" position="left" />
        <div className="flex flex-col gap-12">
          {experiences.map((data, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-1">
                <Reveal>
                  <p className="text-[1em] xl:text-[1.2em] 2xl:text-[1.5em] font-bold">
                    {data.company}
                  </p>
                </Reveal>
                <Reveal>
                  <p className="text-[#828282] text-[0.8em] xl:text-[1em] 2xl:text-[1.2em]">
                    {data.date}
                  </p>
                </Reveal>
              </div>
              <div className="flex items-center justify-between mb-6">
                <Reveal>
                  <p className="emerald ext-[1em] xl:text-[1.2em] 2xl:text-[1.5em] font-bold">
                    {data.position}
                  </p>
                </Reveal>
                <Reveal>
                  <p className="text-[#828282] text-[0.8em] xl:text-[1em] 2xl:text-[1.2em]">
                    {data.location}
                  </p>
                </Reveal>
              </div>
              <Reveal>
                <p className="text-justify text-[0.8em] xl:text-[1em] 2xl:text-[1.2em] text-[#828282] mb-6 tracking-tight">
                  {data.description}
                </p>
              </Reveal>
              <div className="flex flex-wrap gap-4">
                {data.skills.map((skill, index) => (
                  <Reveal key={index}>
                    <div className="bg-[#3f3f46] border border-[#3f3f46] text-[0.7em] xl:text-[0.9em] 2xl:text-[1.2em] py-1 px-3 rounded-[15px] hover:emerald hover:border-[#4ade80] transition-all ease-in-out duration-300">
                      {skill}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Experience;
