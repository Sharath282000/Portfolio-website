import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card
      className="
        shadow-md
        dark:shadow-xl
        border-transparent
        hover:shadow-xl
        transition-all
        duration-300
        flex
        flex-col
        overflow-hidden
        shadow-gray-400
        dark:shadow-gray-700
      "
    >
      <CardHeader>
        <div className="w-full h-full rounded-xl bg-white dark:bg-black flex items-center justify-center overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full rounded-xl mb-5"
          />
        </div>
        <CardTitle className="text-lg font-bold leading-tight text-center dark:text-white">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4 pt-0 flex-grow">
        <CardDescription className="mb-6">
          <p className="text-sm text-gray-500 mb-2 text-center dark:text-white">
            {project.description}
          </p>
        </CardDescription>
        <div className="flex flex-wrap justify-center flex-row gap-2 w-full">
          {project.techStack.map((d) => (
            <Badge variant="secondary" className="shadow-md dark:text-white dark:bg-zinc-700 dark:shadow-2xl" key={project.id}>
              {d}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <a
          className="
            w-full px-4 py-2 
            bg-black text-white 
            rounded-sm shadow-xl
            hover:bg-white hover:text-black
            transition-all duration-150
            text-center font-medium
            dark:text-black dark:hover:bg-black
            dark:hover:text-white dark:bg-white
          "
          href={project.link}
          target="blank"
        >
          View Project
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
