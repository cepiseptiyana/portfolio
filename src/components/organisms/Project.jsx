// Fragments
import Heading from "../Fragments/Elements/Heading";
import Paragraph from "../Fragments/Elements/Paragraph";

const Project = function (props) {
  const { project } = props;

  const data = project.map((data) => {
    return (
      <article
        key={data.id}
        className="relative md:w-[400px] sm:w-[400px] w-[90%] p-4 md:pb-15 pb-12 border border-black border-t-white border-b-white rounded-sm"
      >
        <img src={data.image} alt="" style={{ width: "100%" }} />

        <Heading className="font-bold pt-2 font-[Lato,sans-serif] md:text-lg sm:text-sm text-start text-white">
          {data.judul}
        </Heading>

        <Paragraph className="pl-2 pr-2 font-thin md:text-md sm:text-sm text-sm text-start text-white">
          {data.desc}
        </Paragraph>

        <div className="font-thin flex gap-5 pt-2 md:text-md sm:text-sm text-start text-white">
          <Paragraph className="bg-green-700 font-thin md:text-md sm:text-sm text-sm text-start text-white p-1 rounded-sm">
            {data.tech[0]}
          </Paragraph>

          <Paragraph className="bg-blue-500 font-thin md:text-md sm:text-sm text-sm text-start text-white p-1 rounded-sm">
            {data.tech[1]}
          </Paragraph>
        </div>

        <nav className="absolute bottom-2 bg-red-500 pt-1 pl-5 pr-5 rounded-md hover:bg-red-800 transition duration-500">
          <a href={data.link} className="capitalize text-white">
            {data.visit}
          </a>
        </nav>
      </article>
    );
  });

  return (
    <>
      <div className="flex md:flex-nowrap flex-wrap justify-center gap-5 p-5">
        {data}
      </div>
    </>
  );
};

export default Project;
