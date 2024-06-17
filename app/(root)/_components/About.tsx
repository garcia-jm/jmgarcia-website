import { FaSchoolFlag } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { learnAtSchool, learnAtWork } from "@/app/constants/datas";
import Reveal from "./Reveal";
import SkillCard from "./SkillCard";
import Header from "./Header";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";
import { GrDownload } from "react-icons/gr";
import Link from "next/link";

const About = () => {
  return (
    <section className="mb-[20rem]">
      <MaxWidthWrapper className="flex flex-col gap-4 ">
        <Header title="About" position="left" />
        <div className="flex flex-col items-center xl:flex-row gap-8 xl:gap-4">
          <div className="flex flex-col gap-8 smoke text-[0.9em] sm:text-[1em] flex-[6] text-justify">
            <Reveal>
              <p>
                My passion lies in creating seamless, user-friendly web
                applications that make a difference. Recently I&apos;ve been
                playing around with these frameworks and libraries such as
                Next.js and React to create robust web applications. My journey
                in web development began with a curiosity for how the internet
                works and evolved into a full-fledged career dedicated to
                innovation and problem-solving.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Beyond coding, I have been continuously learning, and seeking
                for my improvement. I often find myself watching videos about
                creating robust and visually stunning websites. I love watching
                tutorials and reading blogs about programming languages,
                frameworks, and libraries and I'd be lying if I say I never
                search for solutions to my errors on GitHub community thread
                posts and stack overflow. Adding all of that, like watching
                tutorials on YouTube and finding solutions on the internet is
                what makes me believe in myself and the skills that I have that
                I can develop robust web applications and be up-to-date with the
                latest trends and what technologies most of the developers use
                today.
              </p>
            </Reveal>
            <Reveal>
              <p>
                In addition to video tutorials, and reading blogs or articles, I
                also have friends who are in the Software engineering sector,
                and my brother who started as a web developer and is now in a
                DevOps position with over a decade of experience. I'm privileged
                and lucky to have them around to share their knowledge and
                experiences with me. They are a big help in aligning the path I
                chose in my journey to become a Web Developer / Software
                Developer. Now, with the learnings and knowledge they have
                shared with me, I've been grinding to make it happen.
              </p>
            </Reveal>
            <div className="flex items-center flex-wrap gap-3">
              <Reveal>
                <div className="flex items-center emerald">
                  <p>Links</p>
                  <ArrowRight className="size-4 ml-2 mr-4" />
                </div>
              </Reveal>

              <Reveal>
                <Link href="https://github.com/garcia-jm" target="_blank">
                  <div className="emerald border border-[#4ade80] rounded-full p-[8px] text-[1em] cursor-pointer hover:bg-[#4ade80] hover:text-[#ebecf3] transition-all ease-in-out duration-300">
                    <FaGithub />
                  </div>
                </Link>
              </Reveal>
              <Reveal>
                <Link
                  href="https://www.linkedin.com/in/garcia-jm/"
                  target="_blank"
                >
                  <div className="emerald border border-[#4ade80] rounded-full p-[8px] text-[1em] cursor-pointer hover:bg-[#4ade80] hover:text-[#ebecf3] transition-all ease-in-out duration-300">
                    <FaLinkedin />
                  </div>
                </Link>
              </Reveal>
              <Reveal>
                <a
                  href="/assets/Garcia-Justin-Mari-Irlandez-Resume.pdf"
                  target="_blank"
                >
                  <div className="flex gap-4 items-center emerald border border-[#4ade80] text-[0.8em] px-4 py-2 rounded-[25px] hover:bg-[#4ade80] hover:text-[#ebecf3] transition-all ease-in-out duration-300 cursor-pointer text-nowrap">
                    Download CV{" "}
                    <span>
                      <GrDownload />
                    </span>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col gap-8 flex-[4]">
            <SkillCard
              Icon={FaSchoolFlag}
              title="Learn at School"
              skills={learnAtSchool}
            />
            <SkillCard
              Icon={MdOutlineWork}
              title="Learn at Work"
              skills={learnAtWork}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
