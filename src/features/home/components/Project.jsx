const Project = function (props) {
  const { project } = props;

  const data = project.map((data) => {
    return (
      <article
        key={data.id}
        className="relative md:w-[400px] sm:w-[400px] w-[90%] p-4 md:pb-15 pb-12 border border-black border-t-white border-b-white rounded-sm"
      >
        <img src={data.image} alt="" style={{ width: "100%" }} />

        <h1 className="font-bold pt-2 font-[Lato,sans-serif] md:text-lg sm:text-sm text-start text-white">
          {data.judul}
        </h1>

        <p className="pl-2 pr-2 font-thin md:text-md sm:text-sm text-sm text-start text-white">
          {data.desc}
        </p>

        <div className="font-thin flex gap-5 pt-2 md:text-md sm:text-sm text-start text-white">
          <p className="bg-green-700 font-thin md:text-md sm:text-sm text-sm text-start text-white p-1 rounded-sm">
            {data.tech[0]}
          </p>

          <p className="bg-blue-500 font-thin md:text-md sm:text-sm text-sm text-start text-white p-1 rounded-sm">
            {data.tech[1]}
          </p>
        </div>

        <nav className="absolute bottom-2 bg-red-500 pl-5 pr-5 rounded-md hover:bg-red-800 transition duration-500">
          <a href={data.link} className="capitalize text-white">
            {data.visit}
          </a>
        </nav>
      </article>
    );
  });

  return (
    <>
      <section className="lg:w-[1000px] w-[100%] m-auto sm:p-10 p-6">
        <header>
          <h1 className="text-white text-center capitalize font-bold md:text-4xl text-2xl md:px-8 px-8 py-1">
            Project
          </h1>
        </header>

        <div className="flex md:flex-nowrap flex-wrap justify-center gap-5 p-5">
          {data}
        </div>
      </section>
    </>
  );
};

export default Project;
