import logo from "./logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectContainer from "./components/Containers/ProjectContainer";
import Hamburger from "./components/Hamburger";

import { useState } from "react";

function App() {
  const [isActive, setActive] = useState(false);

  const lol = (state) => {
    setActive(state);
  };
  return (
    <>
      <Header setActive={lol} />
      <div className="px-5 flex flex-col gap-y-32">
        <Hero />
        <About />
        <Skills />
        <ProjectContainer />
      </div>
      <Footer />
      <Hamburger isActive={isActive} setActive={lol} />
    </>
  );
}

export default App;
