// Fragments
import Heading from "../Fragments/Elements/Heading";
import Paragraph from "../Fragments/Elements/Paragraph";

const AboutMe = (props) => {
  const { profil } = props;

  return (
    <>
      <Paragraph className="text-white italic text-center">steps</Paragraph>
      <Paragraph className="font-[Lato,sans-serif] md:text-lg sm:text-sm text-center pt-7 text-cyan-100">
        {profil}
      </Paragraph>
    </>
  );
};

export default AboutMe;
