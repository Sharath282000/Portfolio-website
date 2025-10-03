import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button";

const CARD_WIDTH_CLASS = "w-full"; 
const CARD_HEIGHT_CLASS = "h-full";

const ProjectCard = ({project}) => {
  return (
      <Card className={`
        shadow-xl
        border-transparent
        hover:shadow-xl 
        transition-all
        duration-300
        p-5
        flex
        flex-col
      `} >
        <div className="shadow-lg rounded-xl">
          <img src={project.imageUrl} alt={project.title} className="rounded-xl"  />
        </div>
      <CardHeader className="px-4 py-3">
        <CardTitle className="text-xl font-bold leading-tight text-center dark:text-white">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <CardDescription className='mb-6'>
          <p className="text-sm text-gray-500 mb-2 text-center dark:text-white">
          {project.description}
        </p>
        </CardDescription>
        <p className="text-xs font-semibold text-black-600 text-center dark:text-white">
          Tech Stack: {project.techStack}
        </p>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full text-black-600 border-black-600 hover:bg-gray-100 transition all duration-75 dark:text-black dark:bg-white"
        >
          <a href={project.link} target="blank">View Project</a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
