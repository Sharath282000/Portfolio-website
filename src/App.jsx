import React from "react";
import Hero from "./components/Hero/Hero";
import './App.css';
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Hero />
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
