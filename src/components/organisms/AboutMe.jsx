// Fragments
import Heading from "../Fragments/Elements/Heading";
import Paragraph from "../Fragments/Elements/Paragraph";

const AboutMe = () => {
  return (
    <>
      <Paragraph className="text-white italic text-center">steps</Paragraph>
      <Paragraph className="font-[Lato,sans-serif] text-gray-300 md:text-lg sm:text-sm text-xs">
        Saya adalah seorang Front-End Web Developer dengan pengalaman lebih dari
        2 tahun dalam membangun website dan aplikasi web yang fungsional serta
        menarik secara visual. Spesialisasi saya meliputi pengembangan antarmuka
        responsif, optimasi performa situs, serta integrasi API. Saya terbiasa
        bekerja dengan tim lintas fungsi dan mengutamakan pengalaman pengguna
        (UX) dalam setiap proyek. Beberapa teknologi yang saya gunakan setiap
        hari: - HTML5, CSS3 (Tailwind) - JavaScript (ES6+), React.js, Next.js -
        Git, GitHub - REST API, JSON - Figma (untuk kolaborasi desain);
      </Paragraph>
    </>
  );
};

export default AboutMe;
