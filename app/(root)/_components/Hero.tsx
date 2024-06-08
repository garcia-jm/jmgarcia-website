import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrDownload } from "react-icons/gr";
import Reveal from "./Reveal";

const Hero = () => {
  return (
    <div className="flex flex-col w-[100%] xl:w-[70%] lg:w-[80%] md:w-[90%] mb-[16rem]">
      <Reveal>
        <p className="text-[1.6em] sm:text-[1.8em] md:text-[2.5em] lg:text-[3.8em] font-bold">
          Hey, I&apos;m Justin Mari Garcia<span className="emerald">.</span>
        </p>
      </Reveal>
      <Reveal>
        <div className="smoke flex box-content h-[1.8rem] sm:h-[2.5rem] md:h-[3rem] lg:h-[5rem] text-[1.2em] sm:text-[1.5em] md:text-[2em] lg:text-[3em]">
          a
          <p className="overflow-hidden">
            <span className="emerald block h-full pl-[10px] animate-spin-words">
              Web Developer
            </span>
            <span className="emerald block h-full pl-[10px] animate-spin-words">
              Front-End Developer
            </span>
            <span className="emerald block h-full pl-[10px] animate-spin-words">
              Back-End Developer
            </span>
            <span className="emerald block h-full pl-[10px] animate-spin-words">
              Software Developer
            </span>
            <span className="emerald block h-full pl-[10px] animate-spin-words">
              Web Developer
            </span>
          </p>
        </div>
      </Reveal>
      <Reveal>
        <p className="smoke text-[0.8em] md:text-[1em] lg:text-[1.3em] mb-8 text-justify">
          Welcome to my page. I love making websites beautiful, responsive and
          interactive. Exploring and discoverning new things in programming is
          what I love doing and you know what&apos;s crazy?{" "}
          <span className="emerald uppercase">
            there&apos;s a plethora of stuff in programming to learn!
          </span>
        </p>
      </Reveal>
      <Reveal>
        <div className="flex items-center gap-4">
          <a
            href="/assets/Garcia-Justin-Mari-Irlandez-Resume.pdf"
            target="_blank"
          >
            <div className="flex gap-4 items-center emerald border border-[#4ade80] text-[0.8em] lg:text-[1.2em] px-4 py-2 lg:px-6 lg:py-3 rounded-[25px] hover:bg-[#4ade80] hover:text-[#ebecf3] transition-all ease-in-out duration-300 cursor-pointer">
              Download CV{" "}
              <span>
                <GrDownload />
              </span>
            </div>
          </a>
          <Link href="https://github.com/garcia-jm" target="_blank">
            <div className="emerald border border-[#4ade80] rounded-full p-2 lg:p-3 text-[1em] lg:text-[1.3em] cursor-pointer hover:bg-[#4ade80] hover:text-[#ebecf3] transition-all ease-in-out duration-300">
              <FaGithub />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/garcia-jm/" target="_blank">
            <div className="emerald border border-[#4ade80] rounded-full p-2 text-[1em] lg:p-3 lg:text-[1.3rem] cursor-pointer hover:bg-[#4ade80] hover:text-[#ebecf3] transition-all ease-in-out duration-300">
              <FaLinkedin />
            </div>
          </Link>
        </div>
      </Reveal>
    </div>
  );
};

export default Hero;
