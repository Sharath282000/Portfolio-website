import React from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import Netflixclone from "../../assets/Images/netflix-clone.png";
import Blogit from "../../assets/Images/blog-light.png";
import AIassistance from "../../assets/Images/artificial-intelligence-6767502_960_720.webp";
import Picslogia from "../../assets/Images/pics gallery screenshot.png";
import StudentsHub from "../../assets/Images/students hub.png";
import Cinmehub from "../../assets/Images/cinema hub.png"
import oldportfolio from "../../assets/Images/old portfolio.png"
import newportfolio from "../../assets/Images/New portfolio.png"
import cognitalk from "../../assets/Images/CogniTalk.png"

const projectsData = [
  {
    id : 9,
    title: "CogniTalk",
    description: "A highly capable and friendly AI assistant. CogniTalk purpose is to assist you with a wide range of questions and tasks, ensuring every interaction is both helpful and engaging.",
    techStack: "Next JS, Tailwind CSS, Google Gemini, Typescript",
    imageUrl : cognitalk,
    link : "https://cogni-talk.vercel.app/"
  },
  {
    id: 1,
    title: "Updated Portfolio Website",
    description: "My personal portfolio showcasing projects and skills, developed using modern component architecture.",
    techStack: "React Js, Tailwind CSS, Vite",
    imageUrl: newportfolio,
    link : ""
  },
  {
    id: 2,
    title: "Picso Loggio (Image Gallery)",
    description: "An open-source,PWA-enabled application for searching and freely downloading high-quality images from a public API.",
    techStack: "React Js, PWA, Rapid API (Image Fetching)",
    imageUrl : Picslogia,
    link: "https://picso-loggia.netlify.app/"
  },
  {
    id: 3,
    title: "Netflix Clone (Previous)",
    description: "A functional clone of the Netflix UI showcasing front-end styling and API integration for content display.",
    techStack: "React Js, PWA, TMDB API",
    imageUrl : Netflixclone,
    link: "https://net-flix-clone-app.netlify.app/"
  },
  {
    id: 4,
    title: "Blog-it (Full Stack Blog)",
    description: "A complete blogging platform featuring content creation, management, and user authentication.",
    techStack: "React Js, Sanity (Database), Tailwind CSS",
    imageUrl : Blogit,
    link: "https://app-blog-it.netlify.app/"
  },
  {
    id: 5,
    title: "Julie: AI Personal Voice Assistant",
    description: "An AI voice assistant capable of sending emails, opening websites/apps, playing media, fetching data from Google, and performing OS commands.",
    techStack: "Python, Various Python Libraries (Speech Recognition, OS, Web Scraping)",
    imageUrl : AIassistance,
    link: "https://github.com/Sharath282000/AI-personal-voice-assistant-Julie"
  },
  {
    id: 6,
    title: "Students Hub (College Final Year Project)",
    description: "A social and professional networking platform connecting college students with each other and the placement cell (a blend of Facebook and LinkedIn).",
    techStack: "PHP, MySQL, HTML, Bootstrap, JS",
    imageUrl : StudentsHub,
    link: "https://github.com/Sharath282000/studentshub"
  },
  {
    id: 7,
    title: "CinemaHub (Movie & TV Info)",
    description: "An application to browse the latest movies and TV shows, allowing users to watch trailers using the TMDB API.",
    techStack: "React Js, TMDB API, JavaScript",
    imageUrl : Cinmehub,
    link: "https://cinemashub.netlify.app/"
  },
  {
    id: 8,
    title: "Old Portfolio Website",
    description: "My initial portfolio website focusing on foundational web development skills and design principles.",
    techStack: "HTML, CSS, JavaScript",
    imageUrl :oldportfolio,
    link: "https://old-portfolio-web.netlify.app/"
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle text-center">Projects</h1>
      <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-8 gap-8 justify-items-center">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Projects;
