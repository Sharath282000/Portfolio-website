import HTML from "../src/assets/Images/html-5.png";
import CSS from "../src/assets/Images/css-3.png";
import JS from "../src/assets/Images/js.png";
import TS from "../src/assets/Images/typescript.png";
import React from "../src/assets/Images/React.png"
import Bootstrap from "../src/assets/Images/bootstrap.png";
import PHP from "../src/assets/Images/php-programming-language-icon.png";
import SQL from "../src/assets/Images/MySQL.png";
import tailwind from "../src/assets/Images/tailwind css.png"
import muiicon from "../src/assets/Images/mui icon.png"
import fb from "../src/assets/Images/firebase.png"
import next from "../src/assets/Images/nextjs-icon.png"
import Oracle from "../src/assets/Images/oracle-icon.png"
import Sanity from "../src/assets/Images/Sanity.png"

export const skills = [
  {
    id: 1,
    name: "FRONT-END CORE",
    skillsset: [
      {
        id: 1,
        logo: HTML,
        name: "HTML",
      },
      {
        id: 2,
        logo: CSS,
        name: "CSS",
      },
      {
        id: 3,
        logo: JS,
        name: "JavaScript",
      },
      {
        id: 4,
        logo: TS,
        name: "TypeScript",
      },
    ],
  },
  {
    id: 2,
    name: "FRAMEWORK & LIBRARIES",
    skillsset: [
      {
        id: 1,
        logo: React,
        name: "React JS",
      },
      {
        id: 2,
        logo: next,
        name: "Next JS",
      },
      {
        id: 3,
        logo: muiicon,
        name: "Material UI",
      },
      {
        id: 4,
        logo: tailwind,
        name: "Tailwind CSS",
      },
      {
        id: 5,
        logo: Bootstrap,
        name: "Bootstrap",
      },
    ],
  },
  {
    id: 3,
    name: "BACK-END & DATABASES",
    skillsset: [
      {
        id: 1,
        logo: fb,
        name: "Google Firebase",
      },
      {
        id: 2,
        logo: PHP,
        name: "PHP",
      },
      {
        id: 3,
        logo: Sanity,
        name: "Sanity Database",
      },
      {
        id: 4,
        logo: SQL,
        name: "SQL",
      },
    ],
  },
  {
    id: 4,
    name: "CLOUD & ERP",
    skillsset: [
      {
        id: 1,
        logo: Oracle,
        name: "Oracle Cloud ERP",
      },
      {
        id: 2,
        logo: Oracle,
        name: "Oracle Cloud HCM",
      },
      {
        id: 3,
        logo: Oracle,
        name: "Oracle Cloud Infrastructure",
      },
    ],
  },
];
