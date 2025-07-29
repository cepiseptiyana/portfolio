const AboutMe = () => {
  return (
    <>
      <section className="lg:w-[1000px] w-[100%] m-auto sm:p-10 p-6">
        <header>
          <h1 className="text-white text-center capitalize font-bold md:text-4xl text-2xl md:px-8 px-8 py-1 shadow-md shadow-white">
            about me
          </h1>
        </header>

        <div className="p-5">
          <p className="text-white italic text-center">steps</p>
          <p className="font-[Lato,sans-serif] text-gray-300 md:text-lg text-sm">
            Saya adalah seorang Front-End Web Developer dengan pengalaman lebih
            dari 2 tahun dalam membangun website dan aplikasi web yang
            fungsional serta menarik secara visual. Spesialisasi saya meliputi
            pengembangan antarmuka responsif, optimasi performa situs, serta
            integrasi API. Saya terbiasa bekerja dengan tim lintas fungsi dan
            mengutamakan pengalaman pengguna (UX) dalam setiap proyek. Beberapa
            teknologi yang saya gunakan setiap hari: - HTML5, CSS3 (Tailwind) -
            JavaScript (ES6+), React.js, Next.js - Git, GitHub - REST API, JSON
            - Figma (untuk kolaborasi desain);
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
