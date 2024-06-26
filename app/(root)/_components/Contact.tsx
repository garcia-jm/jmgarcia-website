import Link from "next/link";
import { SiGmail } from "react-icons/si";
import Reveal from "./Reveal";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Contact = () => {
  return (
    <div className="mb-[20rem]">
      <MaxWidthWrapper className="flex items-center flex-col">
        <Reveal>
          <p className="text-[3em] xl:text-[4em] 2xl:text-[5em] font-bold">
            Contact<span className="emerald">.</span>
          </p>
        </Reveal>
        <Reveal>
          <p className="text-[#828282] text-[0.9em] xl:text-[1em] 2xl:text-[1.2em] text-center">
            Shoot me an email if you want to connect! You can also find me
          </p>
        </Reveal>
        <Reveal>
          <div className="flex items-center text-[#828282] mb-4 text-[0.9em] xl:text-[1em] 2xl:text-[1.2em]">
            me on
            <Link
              className="emerald ml-1"
              href="https://www.linkedin.com/in/garcia-jm/"
              target="_blank"
            >
              LinkedIn.
            </Link>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex items-center justify-center text-[0.9em] xl:text-[1em] 2xl:text-[1.3em]">
            <SiGmail />
            <p className="underline font-bold ml-2 cursor-pointer ">
              garcia.justinmari@gmail.com
            </p>
          </div>
        </Reveal>
      </MaxWidthWrapper>
    </div>
  );
};

export default Contact;
