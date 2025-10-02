import React from "react";
import styles from "./HeroStyles.module.css";
import HeroImg from "../../assets/Images/Hero-modified.png";
import LightMode from "../../assets/Images/Light on.png";
import DarkMode from "../../assets/Images/Lightsoff.png";
import Instagramicon from "../../assets/Images/instagram.png";
import Facebookicon from "../../assets/Images/facebook.png";
import Twittericon from "../../assets/Images/twitter-x.png";
import LinkedInicon from "../../assets/Images/linkedin.png";
import Githubicon from "../../assets/Images/github.png";
import CV from "../../assets/Images/Resume.pdf";
import Twitterdark from "../../assets/Images/icons8-twitterx-48 (1).png";
import Githubdark from "../../assets/Images/icons8-github-50.png";
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const { theme, toggletheme } = useTheme();

  const themeicon = theme === "light" ? LightMode : DarkMode;
  const twitter = theme === "light"? Twittericon : Twitterdark;
  const github = theme === 'light' ? Githubicon : Githubdark

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
          <a href="https://www.instagram.com/sharath_officl/" target="_blank">
            <img src={Instagramicon} alt="Instagram Icon" />
          </a>
          <a href="https://www.facebook.com/thala.sharath.5/" target="_blank">
            <img src={Facebookicon} alt="Facebook Icon" />
          </a>
          <a href="https://twitter.com/Sharath282000" target="_blank">
            <img src={twitter} alt="Twitter Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/sharath-m-6936671b0/"
            target="_blank"
          >
            <img src={LinkedInicon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/Sharath282000" target="_blank">
            <img src={github} alt="Github Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Driven by code as a <b>Full Stack Developer</b>, advising clients as an <b> Oracle ERP Analyst at Deloitte</b>, and unwinding with <b>Cricket</b>
        </p>
      </div>
    </section>
  );
};

export default Hero;
