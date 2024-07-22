import logo from "./logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectContainer from "./components/Containers/ProjectContainer";
import Hamburger from "./components/Hamburger";

import { useState, useEffect } from "react";

function App() {
  const [isActive, setActive] = useState(false);

  const menuState = (state) => {
    setActive(state);
  };

  useEffect(() => {
    isActive
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [isActive]);

  return (
    <>
      <Header setActive={menuState} />
      <div className="px-5 flex flex-col gap-y-60">
        <Hero />
        <About />
        <ProjectContainer />
      </div>
      <Footer />

      <Hamburger isActive={isActive} setActive={menuState} />
    </>
  );
}

export default App;
