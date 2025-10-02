import React from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import Netflixclone from "../../assets/Images/netflix-clone.png";
import Blogit from "../../assets/Images/blog-light.png";
import AIassistance from "../../assets/Images/artificial-intelligence-6767502_960_720.webp";
import portofolio from "../../assets/Images/portfolio.png";
import Picslogia from "../../assets/Images/pics gallery screenshot.png";
import StudentsHub from "../../assets/Images/students hub.png";
import Cinmehub from "../../assets/Images/cinema hub.png"
import oldportfolio from "../../assets/Images/old portfolio.png"
import newportfolio from "../../assets/Images/New portfolio.png"

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={newportfolio}
          link=""
          h3="Updated Portfolio Website"
          description="React Js"
        />
        <ProjectCard
          src={Netflixclone}
          link="https://net-flix-clone-app.netlify.app/"
          h3="Netflix Clone"
          description="React Js,PWA,TMDB Api"
        />
        <ProjectCard
          src={Blogit}
          link="https://app-blog-it.netlify.app/"
          h3="Blog-it"
          description="React JS, Sanity"
        />
        <ProjectCard
          src={AIassistance}
          link="https://github.com/Sharath282000/AI-personal-voice-assistant-Julie"
          h3="AI Voice Assistance"
          description="Python"
        />
        <ProjectCard
          src={portofolio}
          link="https://github.com/Sharath282000/Sharath282000.github.io"
          h3="Portfolio Website"
          description="HTML,CSS,JS"
        />
        <ProjectCard
          src={Picslogia}
          link="https://github.com/Sharath282000/Picso-loggia"
          h3="Picso Loggia"
          description="React JS, Rapid Api, PWA"
        />
        <ProjectCard
          src={StudentsHub}
          link="https://github.com/Sharath282000/studentshub"
          h3="Students Hub"
          description="PHP"
        />
        <ProjectCard
          src={Cinmehub}
          link="https://cinemashub.netlify.app/"
          h3="CinemaHub"
          description="React Js,TMDB Api"
        />
        <ProjectCard
          src={oldportfolio}
          link="https://old-portfolio-web.netlify.app/"
          h3="Portfolio Website"
          description="HTML,CSS,JS"
        />
      </div>
    </section>
  );
};

export default Projects;
