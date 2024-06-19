"use client";

import React, { useState } from "react";
import CustomizedButtons from "./_components/CustomizedButtons";
import { resumeDetails } from "../constants/datas";
import Experience from "./_components/Experience";
import Education from "./_components/Education";
import Skills from "./_components/Skills";
import About from "./_components/About";
import Reveal from "../(root)/_components/Reveal";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const ResumePage = () => {
  const [category, setCategory] = useState("");

  const handleClick = (category: string) => {
    setCategory(category);
  };

  return (
    <MaxWidthWrapper className="flex flex-col xl:flex-row gap-12 mb-[10rem]">
      <div className="flex flex-col gap-4 w-full xl:w-[30%]">
        <Reveal>
          <p className="text-[2em] 2xl:text-[2.5em]">Why hire me?</p>
        </Reveal>
        <Reveal>
          <p className="smoke text-[1em] 2xl:text-[1.2em] mb-4 text-justify tracking-tight">
            My experience with modern frameworks like Next.js and React, coupled
            with my dedication to creating user-friendly and impactful web
            applications, ensures that I can deliver high-quality results.
          </p>
        </Reveal>
        <CustomizedButtons handleClick={handleClick} category={category}>
          Experience
        </CustomizedButtons>
        <CustomizedButtons handleClick={handleClick} category={category}>
          Education
        </CustomizedButtons>
        <CustomizedButtons handleClick={handleClick} category={category}>
          Skills
        </CustomizedButtons>
        <CustomizedButtons handleClick={handleClick} category={category}>
          About me
        </CustomizedButtons>
      </div>
      <div className="flex flex-col w-full xl:w-[70%] gap-4">
        {resumeDetails.map((detail, index) => {
          return (
            <>
              {category === detail.category && (
                <>
                  <Reveal>
                    <p className="text-[2em] 2xl:text-[2.5em]">
                      {detail.title}
                    </p>
                  </Reveal>
                  <Reveal>
                    <p className="smoke text-[1em] 2xl:text-[1.2em] mb-4">
                      {detail.description}
                    </p>
                  </Reveal>{" "}
                </>
              )}
            </>
          );
        })}
        {category === "Experience" && <Experience />}

        {category === "Education" && <Education />}

        {category === "Skills" && <Skills />}

        {category === "About me" && <About />}
      </div>
    </MaxWidthWrapper>
  );
};

export default ResumePage;
