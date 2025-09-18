import { useState } from "react";
import feather from "feather-icons";

const iconHome = feather.icons.home.toSvg({
  color: "black",
});

const iconUserCheck = feather.icons["user-check"].toSvg({
  color: "white",
});

const iconFolder = feather.icons["folder"].toSvg({
  color: "white",
});

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav className="fixed pt-5 right-5 z-10 flex flex-col gap-2">
        <span
          className="hover:scale-90 cursor-pointer bg-white rounded-2xl p-2 hover:bg-gray-500 transition-all duration-300"
          dangerouslySetInnerHTML={{ __html: iconHome }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        ></span>

        <span
          className="hover:scale-90 cursor-pointer bg-blue-500 rounded-2xl p-2 hover:bg-blue-600 transition-all duration-300"
          dangerouslySetInnerHTML={{ __html: iconUserCheck }}
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        ></span>

        <span
          className="hover:scale-90 cursor-pointer bg-yellow-400 rounded-2xl p-2 hover:bg-yellow-500 transition-all duration-300"
          dangerouslySetInnerHTML={{ __html: iconFolder }}
          onClick={() => {
            document.getElementById("project")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        ></span>
      </nav>
    </>
  );
};

export default Navbar;
