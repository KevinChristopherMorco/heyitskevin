import logo from "./logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectContainer from "./components/Containers/ProjectContainer";
import Hamburger from "./components/Hamburger";

import { useState, useEffect, useRef } from "react";

function App() {
  const [isActive, setActive] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "classicBlackAndWhite"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList = "";
    document.body.classList.add(
      theme,
      "bg-[var(--color-primary)]",
      "text-[var(--color-text)]"
    );
  }, [theme]);

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
      <Header setActive={menuState} theme={theme} />
      <div className="px-5 flex flex-col gap-y-60 lg:px-8 xl:px-28 2xl:px-64">
        <Hero setTheme={setTheme} />
        <About />
        <ProjectContainer />
        <Footer />
      </div>

      <Hamburger isActive={isActive} setActive={menuState} />
    </>
  );
}

export default App;
