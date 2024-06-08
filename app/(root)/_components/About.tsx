import { FaSchoolFlag } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { learnAtSchool, learnAtWork } from "@/app/constants/datas";
import Reveal from "./Reveal";
import SkillCard from "./SkillCard";
import Header from "./Header";

const About = () => {
  return (
    <div className="flex flex-col gap-4 mb-[20rem]">
      <Header title="About" position="left" />
      <div className="flex flex-col items-center md:flex-row gap-8 sm:gap-4">
        <div className="flex flex-col gap-8 smoke text-[1em] sm:text-[1.1em] flex-[6] text-justify">
          <Reveal>
            <p>
              Hey I&apos;m Justin, My dad introduced computer to us when I was 5
              years old. I witnessed the success and innovation of technology,
              and how it grew and slowly changed into something that we all use
              in our daily lives. I want to be part of that innovation and help
              create new technologies.
            </p>
          </Reveal>
          <Reveal>
            <p>
              My passion lies in creating seamless, user-friendly web
              applications that make a difference. Recently I&apos;ve been
              playing around with these frameworks and libraries such as Next.js
              and React to create robust web applications. My journey in web
              development began with a curiosity for how the internet works and
              evolved into a full-fledged career dedicated to innovation and
              problem-solving.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Beyond coding, I have a passion for continuous learning and
              improvement. I often find myself watching videos about creating
              innovative and visually stunning websites, as well as tutorials on
              programming languages, frameworks, and libraries that I am eager
              to master. This helps me stay up-to-date with the latest trends
              and technologies, ensuring that I am always prepared for the next
              web application I want to develop. I love discovering new tricks
              and techniques that can enhance my projects, making them more
              efficient and user-friendly.
            </p>
          </Reveal>
          <Reveal>
            <p>
              In addition to video tutorials, I also enjoy reading articles and
              blogs written by industry experts, participating in online
              courses, and engaging in coding challenges. These activities not
              only expand my knowledge but also inspire me to think creatively
              and push the boundaries of what is possible in web development. My
              thirst for knowledge drives me to explore diverse topics, from
              advanced CSS animations to the intricacies of backend development,
              allowing me to become a more versatile and well-rounded developer.
            </p>
          </Reveal>
        </div>
        <div className="flex flex-col gap-8 flex-[4]">
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
    </div>
  );
};

export default About;
