import React from "react";
import styles from "./SkillsStyles.module.css";
import checkdark from "../../assets/Images/Check.svg";
import checklight from "../../assets/Images/check icon.svg";
import theme from "../Hero/Hero";
import SkillList from "../../common/SkillList";

const Skills = () => {
  const checkicon = theme === "light" ? checklight : checkdark;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>🌐
        <SkillList src={checkicon} alt="check icon" skill="HTML" />
        <SkillList src={checkicon} alt="check icon" skill="CSS" />
        <SkillList src={checkicon} alt="check icon" skill="Javascript" />
      </div>
      <br></br>
      <br></br>
      <div className={styles.skillList}>🛠️
        <SkillList src={checkicon} alt="check icon" skill="PHP" />
        <SkillList src={checkicon} alt="check icon" skill="React JS" />
        <SkillList src={checkicon} alt="check icon" skill="Next JS" />
        <SkillList src={checkicon} alt="check icon" skill="ASP.net" />
      </div>
      <br></br>
      <br></br>
      <div className={styles.skillList}>🎨
        <SkillList src={checkicon} alt="check icon" skill="Tailwind CSS" />
        <SkillList src={checkicon} alt="check icon" skill="Material UI" />
        <SkillList src={checkicon} alt="check icon" skill="Bootstrap" />
        <SkillList src={checkicon} alt="check icon" skill="ShadCn UI" />
      </div>
      <br></br>
      <br></br>
      <div className={styles.skillList}>🛢️
        <SkillList src={checkicon} alt="check icon" skill="Google Firebase" />
        <SkillList src={checkicon} alt="check icon" skill="Sanity Database" />
        <SkillList src={checkicon} alt="check icon" skill="SQL" />
      </div>
      <br></br>
      <br></br>
      <div className={styles.skillList}>☁️
        <SkillList src={checkicon} alt="check icon" skill="Oracle Cloud ERP" />
        <SkillList src={checkicon} alt="check icon" skill="Oracle Cloud HCM" />
      </div>
    </section>
  );
};

export default Skills;
