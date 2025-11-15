import React from "react";
import styles from "./SkillsStyles.module.css";
import { skills } from "../../../utils/skills";

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      {skills.map((data) => (
        <div key={data.id} className="mb-10 last:mb-0">
          {/* Category Heading */}
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center uppercase tracking-widest">
            {data.name}
          </h2>

          {/* Skill Set Grid */}
          <div className="flex flex-wrap justify-center gap-6 mx-auto max-w-full">
            {data.skillsset.map((skill) => (
              <div
                key={skill.id}
                className="
                  flex flex-col items-center justify-center p-5 
                   rounded-xl shadow-lg 
                  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl
                  border border-gray-300 dark:border-slate-900 dark:shadow-gray-700
                  w-35 h-35
                  md:w-42 md:h-42
                "
              >
                {/* Logo Image */}
                {/* Set a fixed size for the image container to ensure consistency */}
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Skill Name */}
                <p className="text-sm md:text-base font-medium leading-relaxed text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
