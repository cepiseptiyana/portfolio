import React, { useEffect, useRef } from "react";
import feather from "feather-icons";

// assets
import file_cv from "@assets/fileCv/CV_CepiSeptiyana.pdf";

const iconMail = feather.icons.mail.toSvg({ color: "white" });
const iconLinkeid = feather.icons.linkedin.toSvg({ color: "white" });
const iconGithub = feather.icons.github.toSvg({ color: "black" });

// gsap
import { gsap } from "gsap";

const Jumbotron = () => {
  // text element
  const elementCepi = useRef(null);
  const elementFront = useRef(null);
  const textCepi = "cepi";

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
    <section className="hero__section w-full h-screen flex items-center relative overflow-hidden">
      <div className="wrapper__text relative lg:w-[50%] md:w-[60%] w-[80%] p-5 z-1">
        <h1
          ref={elementCepi}
          className="md:text-6xl text-4xl font-bold capitalize text-white text-shadow-[0_0_35px_rgb(255_255_255)] mt-2"
        >
          Hi! <span className="uppercase text-blue-500">i'am</span>{" "}
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
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <h1
          ref={elementFront}
          className="capitalize text-5xl animated-text pt-3 sm:2xl font-bold"
        >
          Web Developer
        </h1>

        <p className="md:text-xl text-sm font-[Lato,sans-serif] pt-3 text-gray-300">
          Membangun website yang tidak hanya berfungsi, tapi juga memberi
          pengalaman terbaik. Membangun produk digital yang fungsional, modern,
          dan scalable.
        </p>

        <a
          href={file_cv}
          className="text-white text-sm capitalize bg-red-500 block p-2 mt-3 w-fit rounded-md hover:bg-blue-500 duration-200"
        >
          download cv
        </a>

        <div className="pt-4 flex gap-2">
          <span
            className="w-fit cursor-pointer bg-orange-600 rounded-lg p-1 hover:bg-orange-700 hover:scale-90 transition-all duration-200"
            dangerouslySetInnerHTML={{ __html: iconMail }}
            onClick={() => {
              window.location.href = "mailto:cepifams3@gmail.com";
            }}
            title="Email"
          ></span>

          <span
            className="w-fit cursor-pointer bg-blue-500 rounded-lg p-1 hover:bg-blue-600 hover:scale-90 transition-all duration-200"
            dangerouslySetInnerHTML={{ __html: iconLinkeid }}
            title="Linkeid"
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/cepi-septiyana/";
            }}
          ></span>

          <span
            className="w-fit cursor-pointer bg-red-50 rounded-lg p-1 hover:bg-red-100 hover:scale-90 transition-all duration-200"
            dangerouslySetInnerHTML={{ __html: iconGithub }}
            title="Linkeid"
            onClick={() => {
              window.location.href = "https://github.com/cepiseptiyana";
            }}
          ></span>
        </div>
      </div>

      {/* blob */}
      <div className="wrapper__blob">
        <div className="blob"></div>
      </div>
    </section>
  );
};

export default Jumbotron;
