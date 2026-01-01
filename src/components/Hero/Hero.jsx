import React from "react";
import styles from "./HeroStyles.module.css";
import HeroImg from "../../assets/Images/Hero-modified.png";
import LightMode from "../../assets/Images/Light on.png";
import DarkMode from "../../assets/Images/Lightsoff.png";
import { useTheme } from "../../common/ThemeContext";
import { socials } from "../../../utils/social";

const Hero = () => {
  const { theme, toggletheme } = useTheme();

  const themeicon = theme === "light" ? LightMode : DarkMode;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={HeroImg} alt="Sharath cartoon" className={styles.hero} />
        <img
          src={themeicon}
          className={styles.themeicon}
          alt="color mode"
          onClick={toggletheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Sharath</h1>
        <span>
          {socials.map((data) => (
            <a key={data.id} href={data.link} target="_blank">
              <img src={data.icons[theme]} alt={data.alt} />
            </a>
          ))}
        </span>
        <p className={styles.description}>
          Building solutions as an <b>Oracle Cloud Analyst at Deloitte 💼</b>{" "}
          coding creative projects as a <b>Full Stack Developer 💻</b>and
          finding joy in <b>Cricket 🏏 and Cinema 🎥</b>
        </p>
      </div>
    </section>
  );
};

export default Hero;
