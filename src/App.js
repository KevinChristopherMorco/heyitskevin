import logo from "./logo.svg";
import Header from "./components/Partials/Header";
import Footer from "./components/Partials/Footer";
import Hamburger from "./components/Partials/Hamburger";

import Hero from "./components/Containers/sections/Hero";
import About from "./components/Containers/sections/About";
import ProjectContainer from "./components/Containers/ProjectContainer";

import ThemeProvider from "./hooks/Providers/ThemeProvider";

import { useState, useEffect } from "react";
import useActiveList from "./hooks/useActiveList";

function App() {
  const { activeState, setActive, clearActive } = useActiveList();
  // const [isActive, setActive] = useState(false);
  // const menuState = (state) => {
  //   setActive(state);
  // };

  // useEffect(() => {
  //   isActive
  //     ? document.body.classList.add("overflow-hidden")
  //     : document.body.classList.remove("overflow-hidden");
  // }, [isActive]);

  return (
    <>
      <ThemeProvider>
        <Header setActive={setActive} />
      </ThemeProvider>
      <div className="px-5 flex flex-col gap-y-60 lg:px-8 xl:px-28 2xl:px-64">
        <ThemeProvider>
          <Hero />
        </ThemeProvider>

        <About />
        <ProjectContainer />
        <Footer />
      </div>

      <Hamburger isActive={activeState} setActive={clearActive} />
    </>
  );
}

export default App;
