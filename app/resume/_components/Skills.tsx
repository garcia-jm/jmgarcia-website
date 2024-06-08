import Reveal from "@/app/(root)/_components/Reveal";
import { skills } from "@/app/constants/datas";
import React from "react";

const Skills = () => {
  const [hoveredCard, setHoveredCard] = React.useState<Number | null>(null);

  return (
    <div className="flex flex-wrap gap-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex relative items-center justify-center gap-2 bg-[#3f3f46] p-3 lg:p-8 rounded-[5px] cursor-pointer hover:text-[#4ade80] transition-all duration-300 ease-in-out"
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {hoveredCard === index && (
            <p className="absolute top-[-24px] py-1 px-3 rounded-[5px] bg-[#ebecf3] text-[#3f3f46] text-nowrap z-10">
              {skill.name}
            </p>
          )}
          <Reveal>
            <skill.icon className="w-8 h-8 lg:w-10 lg:h-10" />
          </Reveal>
        </div>
      ))}
    </div>
  );
};

export default Skills;
