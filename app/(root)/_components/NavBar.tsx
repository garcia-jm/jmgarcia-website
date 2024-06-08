"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between mb-24">
      <p className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-4xl hover:emerald transition-all ease-in-out duration-300 hover:scale-105">
        <Link href="/">
          Justin
          <span className="emerald">.</span>
        </Link>
      </p>
      <div className="hidden md:block">
        <ul className="flex items-center gap-8 text-lg lg:text-xl 2xl:text-xl">
          <li className="hover:emerald transition-all ease-in-out duration-300">
            <Link href="/resume">Resume</Link>
          </li>
          {/* <li className="hover:emerald transition-all ease-in-out duration-300">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:emerald transition-all ease-in-out duration-300">
            <Link href="/contact">Contact</Link>
          </li> */}
          <li className="bg-[#4ade80] text-[#3f3f46] py-1 px-4 rounded-[20px] hover:scale-110 transition-all ease-in-out duration-300">
            <Link href="/contact">Hire me</Link>
          </li>
        </ul>
      </div>
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger>
            <RxHamburgerMenu className="text-[1.5rem] cursor-pointer" />
          </SheetTrigger>
          <SheetContent className="bg-[#1c1c22]">
            <SheetHeader className="mb-8">
              <SheetTitle>
                <p className="text-2xl text-[#ebecf3] hover:emerald transition-all ease-in-out duration-300 hover:scale-105">
                  <Link href="/">
                    Justin<span className="emerald">.</span>
                  </Link>
                </p>
              </SheetTitle>
            </SheetHeader>
            <SheetDescription>
              <ul className="flex flex-col gap-8 text-lg">
                <li className="hover:emerald transition-all ease-in-out duration-300">
                  <Link href="/resume">Resume</Link>
                </li>
                {/* <li className="hover:emerald transition-all ease-in-out duration-300">
                  <Link href="/projects">Projects</Link>
                </li> */}
                <li className="hover:emerald transition-all ease-in-out duration-300">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavBar;
