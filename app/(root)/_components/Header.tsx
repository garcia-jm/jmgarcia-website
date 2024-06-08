import React from "react";

interface HeaderProps {
  title: string;
  position: string;
}

const Header = ({ title, position }: HeaderProps) => {
  return (
    <div className="flex gap-4 items-center mb-4">
      {position === "left" ? (
        <p className="text-[#ebecf3] font-bold text-[1.8em] sm:text-[2.5em] lg:text-[3em]">
          {title}
          <span className="emerald">.</span>
        </p>
      ) : (
        <hr className="border-[#828282] w-[100%] border-[1px]" />
      )}

      {position === "left" ? (
        <hr className="border-[#828282] w-[100%] border-[1px]" />
      ) : (
        <p className="text-[#ebecf3] font-bold text-[1.8em] sm:text-[2.5em] lg:text-[3em]">
          {title}
          <span className="emerald">.</span>
        </p>
      )}
    </div>
  );
};

export default Header;
