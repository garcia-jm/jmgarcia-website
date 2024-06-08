import React from "react";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Projects from "./_components/Projects";
import Contact from "./_components/Contact";
import Experience from "./_components/Experience";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
