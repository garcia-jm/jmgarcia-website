import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrDownload } from "react-icons/gr";
import Reveal from "./Reveal";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Hero = () => {
  return (
    <section className="mb-[16rem]">
      <MaxWidthWrapper className="flex flex-col">
        <Reveal>
          <p className="text-[1.6em] sm:text-[1.8em] md:text-[2.5em] lg:text-[3.5em] font-bold">
            Hey, I&apos;m Justin Mari Garcia<span className="emerald">.</span>
          </p>
        </Reveal>
        <Reveal>
          <div className="smoke flex box-content h-[1.8rem] sm:h-[2.5rem] md:h-[3rem] text-[1.2em] sm:text-[1.5em] md:text-[1.8em] lg:text-[2.1em]">
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
          <p className="smoke text-[0.8em] md:text-[1em] lg:text-[1.2em] w-full sm:w-[90%] lg:w-[80%] mt-4 mb-8">
            Welcome to my domain! where I showcase my hobbies, what I do, what I
            love doing, and where I spent the last couple of years of my life,
            which is building scalable, efficient, user-friendly,{" "}
            <span className="emerald">Web/Software</span> applications!
          </p>
        </Reveal>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
