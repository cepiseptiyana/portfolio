import React from "react";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Organisms
import Sections from "./organisms/Sections";

function Home() {
  return (
    <>
      <MainLayout>
        <Sections />
      </MainLayout>
    </>
  );
}

export default Home;
