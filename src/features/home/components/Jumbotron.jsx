import React, { useEffect, useRef } from "react";

// assets
import file_cv from "../../../assets/fileCv/cepi.s.cv.pdf";

// gsap
import { gsap } from "gsap";

const Jumbotron = () => {
  // text element
  const elementCepi = useRef(null);
  const elementFront = useRef(null);
  const textCepi = "cepi septiyana";

  useEffect(() => {
    // cepi text
    const chars = elementCepi.current.querySelectorAll(".char");
    gsap.fromTo(
      chars,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.05, ease: "power3.out" }
    );

    // front text
    gsap.to(elementFront.current, {
      backgroundPosition: "400% 0%",
      duration: 8,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <section
      //   ref={heroRef}
      className="hero__section w-full h-screen flex items-center relative overflow-hidden"
    >
      <div className="wrapper__text relative lg:w-[50%] md:w-[60%] w-[80%] p-5 z-1">
        <h1 className="sm:pt-3 pt-1 text-white sm:text-4xl text-4xl capitalize sm:w-[100%] w-[50%]">
          Hi! <span className="uppercase text-blue-500">i'm </span>
        </h1>

        <h1
          ref={elementCepi}
          className="md:text-5xl text-4xl font-bold uppercase text-white text-shadow-[0_0_35px_rgb(255_255_255)]"
        >
          {textCepi.split("").map((char, i) => (
            <span
              style={{
                display: "inline-block",
                opacity: "0",
                transform: "translateY(20px)",
              }}
              key={i}
              className="char"
            >
              {char}
            </span>
          ))}
        </h1>

        <h1
          ref={elementFront}
          className="capitalize animated-text sm:pt-7 pt-0 sm:2xl text-2xl font-bold"
        >
          front end web
        </h1>

        <p className="font-[Lato,sans-serif] text-gray-300 md:text-lg text-sm">
          Hallo, saya cepi septiyana Front-End Web Developer Saya membangun
          antarmuka web yang cepat, responsif, dan user-friendly menggunakan
          teknologi modern seperti HTML, CSS, JavaScript, dan React.
        </p>

        <a
          href={file_cv}
          className="text-white text-sm capitalize bg-red-500 block p-2 mt-5 w-fit rounded-md hover:bg-blue-500 duration-200"
        >
          download cv
        </a>
      </div>

      {/* blob */}
      <div className="wrapper__blob">
        <div className="blob"></div>
      </div>
    </section>
  );
};

export default Jumbotron;
