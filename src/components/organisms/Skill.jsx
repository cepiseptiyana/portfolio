import React from "react";
import { useState } from "react";

// Fragments
import Heading from "../Fragments/Elements/Heading";

const Skill = (props) => {
  const { skills } = props;

  const skill = skills.map((data, index) => {
    return (
      <li
        key={index}
        className="bg-orange-600 px-5 py-1 rounded-xl capitalize text-white cursor-pointer hover:shadow-2xl shadow-violet-200 hover:translate-y-[-3px] transition-all duration-300"
      >
        <p className="font-[Lato,sans-serif] md:text-md sm:text-sm text-sm text-center text-white">
          {data}
        </p>
      </li>
    );
  });

  return (
    <>
      <ul className="flex justify-center items-center flex-wrap gap-5 pt-7">
        {skill}
      </ul>
    </>
  );
};

export default Skill;
