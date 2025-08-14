// components
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Sections from "./components/Sections";
import { useEffect } from "react";

const HomePage = () => {
  return (
    <>
      <header>
        <Navbar />
        <Jumbotron />
      </header>

      <main className="bg-gradient-to-b from-black to-green-950">
        <Sections />
      </main>

      <footer></footer>
    </>
  );
};

export default HomePage;
