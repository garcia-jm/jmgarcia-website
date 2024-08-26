import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "./Reveal";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Footer = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <hr className="border-[#828282] w-[100%] border-[1px] mb-8" />
        <div className="flex flex-wrap justify-between gap-y-8">
          <div className="max-w-[200px] 2xl:max-w-[250px]">
            <Reveal>
              <p className="font-bold mb-6 text-[1.2em] 2xl:text-[1.5em]">
                Justin Mari Garcia
              </p>
            </Reveal>
            <Reveal>
              <p className="text-[#828282] text-[0.9em] 2xl:text-[1em]">
                2024, Built in Next.js and designed by Justin Mari Garcia
              </p>
            </Reveal>
          </div>
          <div className="flex flex-col gap-2">
            <Reveal>
              <p className="text-[#828282] mb-2 text-[1.2em] 2xl:text-[1.5em] font-bold">
                Links
              </p>
            </Reveal>
            {/* <Reveal>
              <Link className="2xl:text-[1.2em]" href="/resume">
                Resume
              </Link>
            </Reveal> */}
            {/* <Reveal>
            <Link className="2xl:text-[1.2em]" href="/work">
              Work
            </Link>
          </Reveal> */}
            <Reveal>
              <Link className="2xl:text-[1.2em]" href="/contact">
                Contact
              </Link>
            </Reveal>
          </div>
          <div className="flex flex-col gap-4">
            <Reveal>
              <p className="text-[#828282] font-bold text-[1.2em] 2xl:text-[1.5em]">
                Get in touch
              </p>
            </Reveal>
            <Reveal>
              <p className="2xl:text-[1.2em]">garcia.justinmari@gmail.com</p>
            </Reveal>

            <div className="flex gap-4">
              <Reveal>
                <Link href="https://github.com/garcia-jm" target="_blank">
                  <div className="emerald border border-[#4ade80] rounded-full p-2 text-[1em] 2xl:p-3 lg:text-[1.3em] 2xl:text-[1.5em] cursor-pointer hover:bg-[#4ade80] hover:text-[#ebecf3] transition-all ease-in-out duration-300">
                    <FaGithub />
                  </div>
                </Link>
              </Reveal>
              <Reveal>
                <Link
                  href="https://www.linkedin.com/in/garcia-jm/"
                  target="_blank"
                >
                  <div className="emerald border border-[#4ade80] rounded-full p-2 text-[1em] 2xl:p-3 lg:text-[1.3rem] 2xl:text-[1.5em] cursor-pointer hover:bg-[#4ade80] hover:text-[#ebecf3] transition-all ease-in-out duration-300">
                    <FaLinkedin />
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Footer;
