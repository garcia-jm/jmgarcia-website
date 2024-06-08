import Reveal from "@/app/(root)/_components/Reveal";
import React from "react";

interface Props {
  title: string;
  subtitle: string;
  date: string;
}

const ExperienceCard = ({ title, subtitle, date }: Props) => {
  return (
    <div className="bg-[#3f3f46] w-[300px] py-5 px-6 2xl:py-6 2xl:px-8 rounded-[15px]">
      <Reveal>
        <p className="emerald mb-2 text-[0.8em] 2xl:text-[1em]">{date}</p>
      </Reveal>
      <Reveal>
        <p className="mb-10 font-bold text-[1em] 2xl:text-[1.1em]">{title}</p>
      </Reveal>
      <Reveal>
        <p className="font-bold text-[1em] 2xl:text-[1.1em]">
          <span className="emerald mr-2">&bull;</span>
          {subtitle}
        </p>
      </Reveal>
    </div>
  );
};

export default ExperienceCard;
