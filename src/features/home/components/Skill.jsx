import React from "react";

const Skill = (props) => {
  const { technology, skill_Teknis, tools, handleMouseMove, position } = props;

  const list_technology = technology.map((data, index) => {
    return (
      <li key={index}>
        <img
          src={data.image}
          alt={data.name}
          title={data.name}
          className="md:w-[55px] w-[43px] hover:-translate-y-2 active:-translate-y-2 transition duration-200"
        />
      </li>
    );
  });

  const list_skill_teknis = skill_Teknis.map((paragraph, index) => {
    return (
      <li
        className="font-[Lato,sans-serif] text-gray-300 md:text-lg text-sm"
        key={index}
      >
        <p className="p-2">{paragraph}</p>
      </li>
    );
  });

  const list_tools = tools.map((tool, index) => {
    return (
      <li className="text-white p-1" key={index}>
        <img
          src={tool.image}
          alt={tool.name}
          title={tool.name}
          className="md:w-[55px] w-[43px] hover:-translate-y-2 active:-translate-y-2 transition duration-200"
        />
      </li>
    );
  });

  return (
    <>
      <section className="lg:w-[1000px] w-[100%] m-auto sm:p-10 p-6">
        <header>
          <h1
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
          </h1>
        </header>

        <article className="md:w-[90%] w-[100%] m-auto pt-8 pb-8">
          <header>
            <h1 className="text-white capitalize font-sans font-bold lg:text-2xl sm:text-2xl text-md text-center">
              skill teknis
            </h1>
          </header>

          <ul>{list_skill_teknis}</ul>
        </article>

        <article>
          <header>
            <h1 className="text-white capitalize font-sans font-bold lg:text-2xl sm:text-2xl text-md text-center p-5">
              Tools
            </h1>
          </header>

          <ul className="flex justify-center items-center flex-wrap gap-5">
            {list_tools}
          </ul>
        </article>

        <article className="">
          <header>
            <h1 className="text-white capitalize font-sans font-bold lg:text-2xl sm:text-2xl text-md text-center p-5">
              technology stack
            </h1>
          </header>

          <ul className="flex justify-center items-center flex-wrap gap-5">
            {list_technology}
          </ul>
        </article>
      </section>
    </>
  );
};

export default Skill;
