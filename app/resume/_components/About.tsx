import Reveal from "@/app/(root)/_components/Reveal";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between">
        <Reveal>
          <p className="smoke text-[12px] md:text-[14px] 2xl:text-[16px]">
            Name
            <span className="text-[#ebecf3] ml-2 text-[16px] 2xl:text-[20px]">
              Justin Mari Garcia
            </span>
          </p>
        </Reveal>
        <Reveal>
          <p className="smoke text-[12px] md:text-[14px] 2xl:text-[16px]">
            Phone
            <span className="text-[#ebecf3] ml-2 text-[16px] 2xl:text-[20px]">
              +1 (403) 926-8394
            </span>
          </p>
        </Reveal>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <Reveal>
          <p className="smoke text-[12px] md:text-[14px] 2xl:text-[16px]">
            Experience
            <span className="text-[#ebecf3] ml-2 text-[16px] 2xl:text-[20px]">
              Less than 6 months
            </span>
          </p>
        </Reveal>
        <Reveal>
          <p className="smoke text-[12px] md:text-[14px] 2xl:text-[16px]">
            LinkedIn
            <span className="text-[#ebecf3] ml-2 text-[16px] 2xl:text-[20px] hover:underline">
              <Link
                href="https://www.linkedin.com/in/garcia-jm/"
                target="_blank"
              >
                View here
              </Link>
            </span>
          </p>
        </Reveal>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <Reveal>
          <p className="smoke text-[12px] md:text-[14px] 2xl:text-[16px]">
            Location
            <span className="text-[#ebecf3] ml-2 text-[16px] 2xl:text-[20px]">
              Calgary, AB
            </span>
          </p>
        </Reveal>
        <Reveal>
          <p className="smoke text-[12px] md:text-[14px] 2xl:text-[16px]">
            Email
            <span className="text-[#ebecf3] ml-2 text-[16px] 2xl:text-[20px]">
              garcia.justinmari@gmail.com
            </span>
          </p>
        </Reveal>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <Reveal>
          <p className="smoke text-[12px] md:text-[14px] 2xl:text-[16px]">
            Freelance
            <span className="text-[#ebecf3] ml-2 text-[16px] 2xl:text-[20px]">
              Available
            </span>
          </p>
        </Reveal>
        <Reveal>
          <p className="smoke text-[12px] md:text-[14px] 2xl:text-[16px]">
            Resume
            <span className="text-[#ebecf3] ml-2 text-[16px] 2xl:text-[20px] hover:underline">
              <a
                href="/assets/Garcia-Justin-Mari-Irlandez-Resume.pdf"
                target="_blank"
              >
                View here
              </a>
            </span>
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
