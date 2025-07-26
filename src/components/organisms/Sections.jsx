import React from "react";
import { useState } from "react";

// data
import { technology, project, skill_Teknis, tools } from "../../data/skills.js";

// Fragments
import Heading from "../Fragments/Elements/Heading.jsx";

// organisms
import AboutMe from "./AboutMe.jsx";
import Education from "./Education.jsx";
import Skill from "./Skill.jsx";
import Project from "./Project.jsx";

const Sections = (props) => {
  const [position, setPosition] = useState({ x: 400, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.pageX - (rect.left + window.scrollX);
    const y = e.pageY - (rect.top + window.scrollY);
    setPosition({ x, y });
  };

  return (
    <>
      <section className="lg:w-[1000px] w-[100%] m-auto sm:p-10 p-6">
        <header>
          <Heading className="text-white text-center capitalize font-bold md:text-4xl text-2xl md:px-8 px-8 py-1 shadow-md shadow-white">
            about me
          </Heading>
        </header>

        <div className="p-5">
          <AboutMe />
        </div>
      </section>

      <section className="lg:w-[1000px] w-[100%] m-auto sm:p-10 p-6">
        <header>
          <Heading className="text-green-500 text-center capitalize font-bold md:text-4xl text-2xl md:px-8 px-8 py-1 shadow-md shadow-white">
            education
          </Heading>
        </header>

        <div className="p-5">
          <Education />
        </div>
      </section>

      <section className="lg:w-[1000px] w-[100%] m-auto sm:p-10 p-6">
        <header>
          <Heading
            onMouseMove={handleMouseMove}
            style={{
              "--x": `${position.x}px`,
              "--y": `${position.y}px`,
              background:
                "radial-gradient(circle at var(--x) var(--y),rgb(255, 0, 0),transparent 50%)",
              backgroundRepeat: "no-repeat",
              borderRadius: "100px",
              backgroundSize: "100% 100%",
              opacity: "1",
            }}
            className="text-white capitalize font-sans font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center"
          >
            my skill
          </Heading>
        </header>

        <Skill
          technology={technology}
          skill_Teknis={skill_Teknis}
          tools={tools}
        />
      </section>

      <section className="lg:w-[1000px] w-[100%] m-auto sm:p-10 p-6">
        <header>
          <Heading className="text-white text-center capitalize font-bold md:text-4xl text-2xl md:px-8 px-8 py-1">
            Project
          </Heading>
        </header>

        <Project project={project} />
      </section>
    </>
  );
};

export default Sections;
