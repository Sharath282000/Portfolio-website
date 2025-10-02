import React from "react";

const ProjectCard = ({src, link, h3, description}) => {
  return (
    <a href={link} target="_blank">
      <img src={src} className="hover" alt="Neflix clone" />
      <h3>{h3}</h3>
      <p>{description}</p>
    </a>
  );
};

export default ProjectCard;
