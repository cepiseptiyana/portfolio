import React from "react";

// Fragments
import Heading from "../Fragments/Elements/Heading";

const Education = (props) => {
  const { education } = props;

  const educate = education.map((data, index) => {
    return (
      <li
        key={index}
        className="font-[Lato,sans-serif] md:text-lg sm:text-sm text-center text-cyan-100"
      >
        {data}
      </li>
    );
  });

  return (
    <>
      <ul className="pt-7">{educate}</ul>;
    </>
  );
};

export default Education;
