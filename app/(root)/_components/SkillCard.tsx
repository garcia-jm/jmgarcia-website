import React from "react";
import { IconType } from "react-icons";
import Reveal from "./Reveal";

interface SkillCardProps {
  Icon: IconType;
  title: string;
  skills: string[];
}

const SkillCard = ({ Icon, title, skills }: SkillCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="p-2 lg:p-3 border-[#4ade80] border rounded-[10px]">
          <Icon className="emerald text-[1.2em] lg:text-[1.5em]" />
        </div>
        <Reveal>
          <p className="text-[#ebecf3] text-[1.2em] lg:text-[1.5em] capitalize font-bold">
            {title}
          </p>
        </Reveal>
      </div>
      <div className="flex gap-3 flex-wrap">
        {skills.map((skill, index) => (
          <Reveal key={index}>
            <div className="bg-[#3f3f46] border border-[#3f3f46] text-[0.8em] lg:text-[1em] text-[#828282] py-1 px-2 rounded-[7px] hover:emerald hover:border-[#4ade80] transition-all ease-in-out duration-300">
              {skill}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
