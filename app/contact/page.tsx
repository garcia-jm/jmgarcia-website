import ContactForm from "./_components/ContactForm";
import { IoCallSharp } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import Reveal from "../(root)/_components/Reveal";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const ContactPage = () => {
  return (
    <MaxWidthWrapper className="flex flex-col lg:flex-row gap-8 mb-[8rem] lg:items-center">
      <div className="w-full xl:w-[50%] bg-[#252530] p-4 md:p-6 xl:p-8 2xl:py-12 2xl:px-16 rounded-[15px]">
        <Reveal>
          <p className="emerald text-[1.3em] lg:text-[1.5em] xl:text-[1.8em] 2xl:text-[2.5em] mb-2">
            Let&apos;s work together
          </p>
        </Reveal>
        <Reveal>
          <p className="smoke text-[0.8em] lg:text-[0.9em] xl:text-[1em] 2xl:text-[1.3em] mb-8">
            I&apos;m always open to new projects, collaborations, or even just a
            chat. Feel free to reach out to me!
          </p>
        </Reveal>
        <ContactForm />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex gap-4 items-center">
          <div className="rounded-[5px] bg-[#252530] p-2 md:p-3 2xl:p-4">
            <IoCallSharp className="text-[#4ade80] text-[1.5em] lg:text-[2em] 2xl:text-[2.5em]" />
          </div>
          <div>
            <Reveal>
              <p className="smoke text-[0.7em] 2xl:text-[1.2em]">Phone</p>
            </Reveal>
            <Reveal>
              <p className="text-[0.9em] 2xl:text-[1.5em]">+1 (403) 926-8394</p>
            </Reveal>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="rounded-[5px] bg-[#252530] p-2 md:p-3 2xl:p-4">
            <BiLogoGmail className="text-[#4ade80] text-[1.5em] lg:text-[2em] 2xl:text-[2.5em]" />
          </div>
          <div>
            <Reveal>
              <p className="smoke text-[0.7em] 2xl:text-[1.2em]">Email</p>
            </Reveal>
            <Reveal>
              <p className="text-[0.9em] 2xl:text-[1.5em]">
                garcia.justinmari@gmail.com
              </p>
            </Reveal>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="rounded-[5px] bg-[#252530] p-2 md:p-3 2xl:p-4">
            <IoLocation className="text-[#4ade80] text-[1.5em] lg:text-[2em] 2xl:text-[2.5em]" />
          </div>
          <div>
            <Reveal>
              <p className="smoke text-[0.7em] 2xl:text-[1.2em]">Address</p>
            </Reveal>
            <Reveal>
              <p className="text-[0.9em] 2xl:text-[1.5em]">
                Calgary, AB, T2A 6B9
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ContactPage;
