import React, { useEffect, useRef } from "react";

// gsap
import { gsap } from "gsap";

// Fragments
import Heading from "../Fragments/Elements/Heading";
import Paragraph from "../Fragments/Elements/Paragraph";

const HeroSection = (props) => {
  const { heroRef } = props;

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
      ref={heroRef}
      className="hero__section w-full h-screen flex items-center relative overflow-hidden"
    >
      <div className="wrapper__text relative lg:w-[50%] md:w-[60%] w-[80%] p-5 z-1">
        <Heading className="sm:pt-3 pt-1 text-white sm:text-4xl text-4xl capitalize sm:w-[100%] w-[50%]">
          Hi! <span className="uppercase text-blue-500">i'm </span>
        </Heading>

        <Heading
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
        </Heading>

        <Heading
          ref={elementFront}
          className="capitalize animated-text sm:pt-7 pt-0 sm:2xl text-2xl font-bold"
        >
          front end web
        </Heading>

        <Paragraph className="font-[Lato,sans-serif] text-gray-300 md:text-lg sm:text-sm text-xs">
          Hallo, saya cepi septiyana Front-End Web Developer Saya membangun
          antarmuka web yang cepat, responsif, dan user-friendly menggunakan
          teknologi modern seperti HTML, CSS, JavaScript, dan React.
        </Paragraph>
      </div>

      {/* blob */}
      <div className="wrapper__blob">
        <div className="blob"></div>
      </div>
    </section>
  );
};

export default HeroSection;
