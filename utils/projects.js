import Netflixclone from "../src/assets/Images/netflix-clone.png";
import Blogit from "../src/assets/Images//blog-light.png";
import AIassistance from "../src/assets/Images//artificial-intelligence-6767502_960_720.webp";
import Picslogia from "../src/assets/Images//pics gallery screenshot.png";
import StudentsHub from "../src/assets/Images//students hub.png";
import Cinmehub from "../src/assets/Images//cinema hub.png";
import oldportfolio from "../src/assets/Images//old portfolio.png";
import newportfolio from "../src/assets/Images//New portfolio.png";
import Arivu from "../src/assets/Images//Arivu.png";

export const projectsData = [
  {
    id: 9,
    title: "Arivu AI",
    description:
      "A highly capable and friendly AI text and voice assistant. Arivu purpose is to assist you with a wide range of questions and tasks, ensuring every interaction is both helpful and engaging.",
    techStack: ["Next JS", "Tailwind CSS", "Google Gemini", "Typescript"],
    imageUrl: Arivu,
    link: "https://arivu-ai.vercel.app/",
  },
  {
    id: 1,
    title: "Updated Portfolio Website",
    description:
      "My personal portfolio showcasing projects and skills, developed using modern component architecture.",
    techStack: ["React Js", "Tailwind CSS", "Vite"],
    imageUrl: newportfolio,
    link: "",
  },
  {
    id: 2,
    title: "Picso Loggio (Image Gallery)",
    description:
      "An open-source,PWA-enabled application for searching and freely downloading high-quality images from a public API.",
    techStack: ["React Js", "PWA, Rapid API (Image Fetching)"],
    imageUrl: Picslogia,
    link: "https://picso-loggia.netlify.app/",
  },
  {
    id: 3,
    title: "Netflix Clone (Previous)",
    description:
      "A functional clone of the Netflix UI showcasing front-end styling and API integration for content display.",
    techStack: ["React Js", "PWA", "TMDB API"],
    imageUrl: Netflixclone,
    link: "https://net-flix-clone-app.netlify.app/",
  },
  {
    id: 4,
    title: "Blog-it (Full Stack Blog)",
    description:
      "A complete blogging platform featuring content creation, management, and user authentication.",
    techStack: ["React Js", "Sanity (Database)", "Tailwind CSS"],
    imageUrl: Blogit,
    link: "https://app-blog-it.netlify.app/",
  },
  {
    id: 5,
    title: "Julie: AI Personal Voice Assistant",
    description:
      "An AI voice assistant capable of sending emails, opening websites/apps, playing media, fetching data from Google, and performing OS commands.",
    techStack: [
      "Python",
      "Various Python Libraries (Speech Recognition",
      "OS, Web Scraping)",
    ],
    imageUrl: AIassistance,
    link: "https://github.com/Sharath282000/AI-personal-voice-assistant-Julie",
  },
  {
    id: 6,
    title: "Students Hub (College Final Year Project)",
    description:
      "A social and professional networking platform connecting college students with each other and the placement cell (a blend of Facebook and LinkedIn).",
    techStack: ["PHP", "MySQL", "HTML", "Bootstrap", "JS"],
    imageUrl: StudentsHub,
    link: "https://github.com/Sharath282000/studentshub",
  },
  {
    id: 7,
    title: "CinemaHub (Movie & TV Info)",
    description:
      "An application to browse the latest movies and TV shows, allowing users to watch trailers using the TMDB API.",
    techStack: ["React Js", "TMDB API", "JavaScript"],
    imageUrl: Cinmehub,
    link: "https://cinemashub.netlify.app/",
  },
  {
    id: 8,
    title: "Old Portfolio Website",
    description:
      "My initial portfolio website focusing on foundational web development skills and design principles.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl: oldportfolio,
    link: "https://old-portfolio-web.netlify.app/",
  },
];