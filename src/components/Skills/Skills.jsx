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
      <div className={styles.skillList}>
        <SkillList src={checkicon} alt="check icon" skill="HTML" />
        <SkillList src={checkicon} alt="check icon" skill="CSS" />
        <SkillList src={checkicon} alt="check icon" skill="Javascript" />
        <SkillList src={checkicon} alt="check icon" skill="Tailwind CSS" />
      </div>
      <br></br>
      <br></br>
      <div className={styles.skillList}>
        <SkillList src={checkicon} alt="check icon" skill="React JS" />
        <SkillList src={checkicon} alt="check icon" skill="Next JS" />
        <SkillList src={checkicon} alt="check icon" skill="ASP.net" />
        <SkillList src={checkicon} alt="check icon" skill="Material UI" />
      </div>
      <br></br>
      <br></br>
      <div className={styles.skillList}>
        <SkillList src={checkicon} alt="check icon" skill="Google Firebase" />
        <SkillList src={checkicon} alt="check icon" skill="Sanity Database" />
        <SkillList src={checkicon} alt="check icon" skill="SQL" />
        <SkillList src={checkicon} alt="check icon" skill="PHP" />
        <SkillList src={checkicon} alt="check icon" skill="Oracle Cloud ERP" />
      </div>
    </section>
  );
};

export default Skills;
