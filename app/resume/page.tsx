"use client";

import React, { useState } from "react";
import CustomizedButtons from "./_components/CustomizedButtons";
import { resumeDetails } from "../constants/datas";
import Experience from "./_components/Experience";
import Education from "./_components/Education";
import Skills from "./_components/Skills";
import About from "./_components/About";
import Reveal from "../(root)/_components/Reveal";

const ResumePage = () => {
  const [category, setCategory] = useState("");

  const handleClick = (category: string) => {
    setCategory(category);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-12 mb-[10rem]">
      <div className="flex flex-col gap-4 w-full sm:w-[50%] lg:w-[40%] xl:w-[30%]">
        <Reveal>
          <p className="text-[2em] 2xl:text-[2.5em]">Why hire me?</p>
        </Reveal>
        <Reveal>
          <p className="smoke text-[1em] 2xl:text-[1.2em] mb-4 text-justify">
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
      <div className="flex flex-col w-full sm:w-[50%] lg:w-[60%] xl:w-[70%] gap-4">
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
    </div>
  );
};

export default ResumePage;
