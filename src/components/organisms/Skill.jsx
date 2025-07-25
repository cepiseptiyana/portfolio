import React from "react";

// Fragments
import Heading from "../Fragments/Elements/Heading";
import Paragraph from "../Fragments/Elements/Paragraph";

const Skill = (props) => {
  const { technology, skill_Teknis } = props;

  const list_technology = technology.map((data, index) => {
    return (
      <li key={index}>
        <img
          src={data}
          alt={data}
          className="md:w-[55px] w-[43px] hover:-translate-y-2 transition duration-200"
        />
      </li>
    );
  });

  const list_skill_teknis = skill_Teknis.map((paragraph, index) => {
    return (
      <li className="text-white p-1" key={index}>
        <Paragraph>{paragraph}</Paragraph>
      </li>
    );
  });

  return (
    <>
      <article className="md:w-[90%] w-[100%] m-auto pt-8 pb-8">
        <header>
          <Heading className="text-white capitalize font-sans font-bold lg:text-2xl sm:text-2xl text-md text-center">
            skill teknis
          </Heading>
        </header>

        <ul>{list_skill_teknis}</ul>
      </article>

      <article>
        <header>
          <Heading className="text-white capitalize font-sans font-bold lg:text-2xl sm:text-2xl text-md text-center p-5">
            Tools & Methodologies
          </Heading>
        </header>
      </article>

      <article className="">
        <header>
          <Heading className="text-white capitalize font-sans font-bold lg:text-2xl sm:text-2xl text-md text-center p-5">
            technology stack
          </Heading>
        </header>
        <ul className="flex justify-center items-center flex-wrap gap-5">
          {list_technology}
        </ul>
      </article>
    </>
  );
};

export default Skill;
