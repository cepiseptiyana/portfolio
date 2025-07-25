import React, { useEffect, useRef } from "react";

// gsap
import { gsap } from "gsap";

// dependensi
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

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
      className="hero__section w-full h-screen flex items-center relative z-1 overflow-hidden"
    >
      <div className="wrapper__text md:w-[50%] w-[80%] p-5">
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

        <Paragraph className="lg:text-lg md:text-md text-xs text-slate-200 sm:pt-3 pt-5 font-sans">
          Hallo, saya cepi septiyana Front-End Web Developer Saya membangun
          antarmuka web yang cepat, responsif, dan user-friendly menggunakan
          teknologi modern seperti HTML, CSS, JavaScript, dan React.
        </Paragraph>
      </div>

      {/* blob */}
      <div className="wrapper__blob z-1">
        <div className="blob"></div>
      </div>

      {/* https://getwaves.io/ */}
      {/* <div className="absolute 2xl:w-[100%] md:w-[2800px] w-[2000px] bottom-0 z-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#273036"
            fillOpacity="1"
            d="M0,0L40,48C80,96,160,192,240,202.7C320,213,400,139,480,122.7C560,107,640,149,720,149.3C800,149,880,107,960,101.3C1040,96,1120,128,1200,170.7C1280,213,1360,267,1400,293.3L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </section>
  );
};

export default HeroSection;
