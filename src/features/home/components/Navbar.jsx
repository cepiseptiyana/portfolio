import { useState } from "react";
import feather from "feather-icons";

const iconHome = feather.icons.home.toSvg({
  color: "black",
});
const iconUserCheck = feather.icons["user-check"].toSvg({
  color: "white",
});
const iconCall = feather.icons.phone.toSvg({
  color: "white",
});

const iconMail = feather.icons.mail.toSvg();
const iconGithub = feather.icons.github.toSvg();
const iconX_circle = feather.icons["x-circle"].toSvg({ color: "white" });

const Navbar = () => {
  //   const aboutRef = useRef(null);
  //   const heroRef = useRef(null);

  //     const scrollToAbout = () => {
  //       aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  //     };

  //     const scrollToHero = () => {
  //       heroRef.current?.scrollIntoView({ behavior: "smooth" });
  //     };

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav className="fixed pt-5 right-5 z-10 flex flex-col gap-2">
        <div
          className="hover:scale-75 cursor-pointer bg-white rounded-2xl p-2 hover:bg-gray-500 transition-all duration-300"
          dangerouslySetInnerHTML={{ __html: iconHome }}
          //   onClick={scrollToHero}
        ></div>

        <div
          className="hover:scale-75 cursor-pointer bg-blue-500 rounded-2xl p-2 hover:bg-blue-300 transition-all duration-300"
          dangerouslySetInnerHTML={{ __html: iconUserCheck }}
          //   onClick={scrollToAbout}
        ></div>

        {/* sosmed */}
        <div className="w-[40px] h-[40px] relative">
          <div
            className={`${
              isActive ? "scale-75 bg-green-300" : "scale-100 bg-green-500"
            } absolute z-4 cursor-pointer rounded-2xl p-2 transition-all duration-500`}
            dangerouslySetInnerHTML={{ __html: iconCall }}
            onMouseOver={() => setIsActive(true)}
          ></div>

          {/* close */}
          <div
            className={`${
              isActive ? "right-[120%]" : "right-[0%]"
            } absolute z-1 top-[11.3%] cursor-pointer rounded-lg p-1 hover:bg-blue-500 hover:scale-75 transition-all duration-500`}
            dangerouslySetInnerHTML={{ __html: iconX_circle }}
            onClick={() => {
              setIsActive(false);
            }}
          ></div>

          {/* sosmed */}
          <div
            className={`${
              isActive
                ? "right-[130%] bottom-[100%] scale-100"
                : "right-[0%] bottom-[0%] scale-0"
            } absolute z-3 cursor-pointer bg-yellow-300 rounded-lg p-1 hover:bg-yellow-500 hover:scale-85 transition-all duration-300`}
            dangerouslySetInnerHTML={{ __html: iconMail }}
            onClick={() => {
              window.location.href = "mailto:cepifams3@gmail.com";
            }}
          ></div>

          <div
            className={`${
              isActive ? "right-[210%] scale-100" : "right-[0%] scale-0"
            } absolute z-2 top-[11.2%] cursor-pointer bg-white rounded-lg p-1 hover:bg-gray-500 hover:scale-85 transition-all duration-400`}
            dangerouslySetInnerHTML={{ __html: iconGithub }}
            onClick={() => {
              window.location.href = "https://github.com/cepiseptiyana";
            }}
          ></div>

          <div
            className={`${
              isActive
                ? "right-[130%] top-[100%] scale-100"
                : "right-[0%] top-[0%] scale-0"
            } absolute z-1 cursor-pointer bg-green-500 rounded-lg p-1 hover:bg-green-300 hover:scale-85 transition-all duration-500`}
            dangerouslySetInnerHTML={{ __html: iconCall }}
            onClick={() => {
              window.location.href = "https://wa.me/6285659519463";
            }}
          ></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
