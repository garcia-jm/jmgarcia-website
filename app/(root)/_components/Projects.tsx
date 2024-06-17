import { projects } from "@/app/constants/datas";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Header from "./Header";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="mb-[20rem]">
      <MaxWidthWrapper className="flex flex-col ">
        <Header title="Projects" position="right" />
        <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              skills={project.skills}
              shortDescription={project.shortDescription}
              description={project.description}
              imgUrl={project.imgUrl}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Projects;
