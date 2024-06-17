import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction } from "react";
import { ProjectProps } from "./ProjectCard";

import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  project: ProjectProps;
}

const ProjectModal = ({ isOpen, setIsOpen, project }: Props) => {
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent className="bg-inherit border-none group">
        <div className="min-w-full">
          <Carousel orientation="horizontal">
            <CarouselContent>
              {project.imgUrl.map((img, index) => (
                <CarouselItem key={img + index}>
                  <AspectRatio ratio={100 / 70}>
                    <img src={img} className="w-full h-full object-fit" />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            {project.imgUrl.length > 1 && (
              <CarouselPrevious className="opacity-0 hidden sm:group-hover:flex sm:group-hover:opacity-100 hover:border-[#4ade80] hover:bg-black hover:text-[#4ade80] transition-all duration-300 ease-in-out" />
            )}
            {project.imgUrl.length > 1 && (
              <CarouselNext className="opacity-0 hidden sm:group-hover:flex sm:group-hover:opacity-100 hover:border-[#4ade80] hover:bg-black hover:text-[#4ade80] transition-all duration-300 ease-in-out" />
            )}
          </Carousel>
        </div>
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold tracking-tight">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base py-2">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className={`text-[#4ade80] hover:underline transition-all ease-in-out duration-300 ${
                  index !== skill.length - 1
                    ? "border-r border-[#4ade80] pr-2 mr-2"
                    : ""
                }`}
              >
                {skill}
              </span>
            ))}
            <p className="mt-8 text-justify">{project.description}</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
