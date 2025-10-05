import React from "react";
import styles from "./SkillsStyles.module.css";
import SkillList from "../../common/SkillList";

const Skills = () => {

  const frontend = [
    {
      id: 1,
      skill: "HTML",
      icon: "🌐",
    },
    {
      id: 2,
      skill: "CSS",
      icon: "🌐",
    },
    {
      id: 3,
      skill: "JavaScript",
      icon: "🌐",
    },
  ]

  const backend =[
    {
      id: 4,
      skill: "PHP",
      icon: "🛠️",
    },
    {
      id: 5,
      skill: "React JS",
      icon: "🛠️",
    },
    {
      id: 6,
      skill: "Next JS",
      icon: "🛠️",
    },
    {
      id: 7,
      skill: "TypeScript",
      icon: "🛠️",
    },
    {
      id: 8,
      skill: "ASP.net",
      icon: "🛠️",
    },
  ]

  const stylings =[
    {
      id: 9,
      skill: "Tailwind CSSS",
      icon: "🎨",
    },
    {
      id: 10,
      skill: "Material UI",
      icon: "🎨",
    },
    {
      id: 11,
      skill: "Bootstrap",
      icon: "🎨",
    },
    {
      id: 12,
      skill: "ShadCn UI",
      icon: "🎨",
    },
  ]

  const cloud =[
    {
      id: 15,
      skill: "Oracle Cloud ERP",
      icon: "☁️",
    },
    {
      id: 16,
      skill: "Oracle Cloud HCM",
      icon: "☁️",
    }
  ]

  const databases =[
    {
      id: 13,
      skill: "Google Firebase",
      icon: "🛢️",
    },
    {
      id: 14,
      skill: "Sanity Database",
      icon: "🛢️",
    },
    {
      id: 15,
      skill: "SQL",
      icon: "🛢️",
    },
  ]

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
       {frontend?.map((data) => (
          <div className={styles.skillcontainer}>
            <SkillList icon={data.icon} id={data.id} skill={data.skill} />
          </div>
      ))} 
      </div>
      <div className={styles.skillList}>
       {backend?.map((data) => (
          <div className={styles.skillcontainer}>
            <SkillList icon={data.icon} id={data.id} skill={data.skill} />
          </div>
      ))} 
      </div>
      <div className={styles.skillList}>
       {stylings?.map((data) => (
          <div className={styles.skillcontainer}>
            <SkillList icon={data.icon} id={data.id} skill={data.skill} />
          </div>
      ))} 
      </div>
      <div className={styles.skillList}>
       {databases?.map((data) => (
          <div className={styles.skillcontainer}>
            <SkillList icon={data.icon} id={data.id} skill={data.skill} />
          </div>
      ))} 
      </div>
      <div className={styles.skillList}>
       {cloud?.map((data) => (
          <div className={styles.skillcontainer}>
            <SkillList icon={data.icon} id={data.id} skill={data.skill} />
          </div>
      ))} 
      </div>
    </section>
  );
};

export default Skills;
