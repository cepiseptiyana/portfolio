import React from "react";
import { useState } from "react";

// data
import { technology, tools } from "../data/icons.js";
import { project } from "../data/product.js";
import { skill_Teknis } from "../data/skill.teknis.js";
import { certifications } from "../data/certifications.js";

// components
import AboutMe from "./AboutMe.jsx";
import Education from "./Education.jsx";
import Skill from "./Skill.jsx";
import Project from "./Project.jsx";
import Certifications from "./Certifications.jsx";

const Sections = () => {
  const [position, setPosition] = useState({ x: 400, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.pageX - (rect.left + window.scrollX);
    const y = e.pageY - (rect.top + window.scrollY);
    setPosition({ x, y });
  };

  return (
    <>
      <AboutMe />
      <Education />
      <Skill
        technology={technology}
        tools={tools}
        skill_Teknis={skill_Teknis}
        position={position}
        handleMouseMove={handleMouseMove}
      />
      <Project project={project} />
      <Certifications certifications={certifications} />
    </>
  );
};

export default Sections;
