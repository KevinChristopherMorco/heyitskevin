import React from "react";
import { useThemeContext } from "../../../hooks/Providers/ThemeProvider";
import useHeroAnimation from "../../../hooks/useHeroAnimation";
import useActiveList from "../../../hooks/useActiveList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = ({ setActive }) => {
  const { currentImage } = useHeroAnimation();
  const { theme, setTheme } = useThemeContext();

  return (
    <section
      className="mt-[15vh] flex flex-col items-center md:flex-row-reverse md:justify-between xl:mt-[30vh] 2xl:mt-[20vh]"
      id="intro"
      onScroll={() => setActive("list", "intro")}
    >
      <div className="flex justify-center md:basis-[35%] lg:basis-[40%] relative">
        <img
          src={currentImage}
          alt="Hero Image"
          className={`w-72 h-72 md:w-80 md:h-80 xl:w-96 xl:h-96 2xl:h-[500px] 2xl:w-[500px] animate-fadeIn`}
        />
      </div>
      <div className="flex flex-col gap-y-20 md:basis-[60%] lg:basis-[60%]">
        {/* <div className="flex flex-wrap justify-evenly items-center gap-y-6 text-3xl text-center font-bold md:text-4xl md:gap-x-4 xl:text-5xl 2xl:text-6xl">
          <p>Discover.</p>
          <p>Visualize.</p>
          <p>Develop.</p>
        </div> */}
        <div className="flex flex-col gap-y-6 text-center xl:text-start">
          <p className="text-2xl text-[var(--color-accent)] md:text-lg xl:text-3xl">
            Hi there, I'm
          </p>
          <p className="text-4xl text-[var(--color-accent)] font-extrabold xl:text-5xl">
            Kevin Morco.
          </p>
          <p className="text-2xl md:text-3xl xl:text-3xl">
            Dedicated Web Developer
          </p>
          <div className="italic md:text-lg 2xl:text-2xl">
            <p>Passionate about Programming and Continuous Learning.</p>
          </div>
          <div className="my-2 flex justify-around items-center xl:justify-start xl:gap-x-10">
            <a
              href="https://github.com/KevinChristopherMorco"
              target="_blank"
              className="w-1/3 p-2 bg-[var(--color-accent)] text-[var(--color-text-accent)] text-center transition ease-in-out rounded hover:scale-110 xl:text-xl"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-christopher-morco-a9a361289/"
              target="__blank"
              className="w-2/5 p-2 text-center text-[var(--color-accent)] font-bold border border-[var(--color-accent)] rounded xl:text-xl"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-y-6 text-center xl:text-start">
          <p className="text-3xl font-semibold">Personalize Theme</p>
          <p className="text-medium font-medium italic xl:text-lg">
            Choose a theme that suits your preference.
          </p>
          <div className="flex justify-evenly xl:justify-start xl:gap-x-20">
            <div
              className={`w-4 h-4 bg-[#000] rounded-full cursor-pointer md:w-6 md:h-6 2xl:w-8 2xl:h-8 ${
                theme === "classicBlackAndWhite" &&
                "border-2 border-[var(--color-text)]"
              }`}
              onClick={() => setTheme("classicBlackAndWhite")}
            ></div>
            <div
              className={`w-4 h-4 bg-[#7b34d4] rounded-full cursor-pointer md:w-6 md:h-6 2xl:w-8 2xl:h-8 ${
                theme === "twilightBliss" &&
                "border-2 border-[var(--color-text)]"
              }`}
              onClick={() => setTheme("twilightBliss")}
            ></div>
            <div
              className={`w-4 h-4 bg-[#e44a40] rounded-full cursor-pointer md:w-6 md:h-6 2xl:w-8 2xl:h-8 ${
                theme === "bloodMoon" && "border-2 border-[var(--color-text)]"
              }`}
              onClick={() => setTheme("bloodMoon")}
            ></div>
            <div
              className={`w-4 h-4 bg-[#428439] rounded-full cursor-pointer md:w-6 md:h-6 2xl:w-8 2xl:h-8 ${
                theme === "rainforestExplore" &&
                "border-2 border-[var(--color-text)]"
              }`}
              onClick={() => setTheme("rainforestExplore")}
            ></div>
            <div
              className={`w-4 h-4 bg-[#12CEF7] rounded-full cursor-pointer md:w-6 md:h-6 2xl:w-8 2xl:h-8 ${
                theme === "blessedAqua" && "border-2 border-[var(--color-text)]"
              }`}
              onClick={() => setTheme("blessedAqua")}
            ></div>
            <div
              className={`w-4 h-4 bg-[#fff] rounded-full cursor-pointer md:w-6 md:h-6 2xl:w-8 2xl:h-8 ${
                theme === "classicWhiteAndBlack" &&
                "border-2 border-[var(--color-text)]"
              }`}
              onClick={() => setTheme("classicWhiteAndBlack")}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
