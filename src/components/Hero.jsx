import React from "react";
import computer from "../images/hero/computer.png";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = ({ setTheme }) => {
  return (
    <section
      className="mt-[15vh] flex flex-col items-center md:flex-row-reverse md:justify-between xl:mt-[30vh]"
      id="intro"
    >
      <div className="flex justify-center md:basis-[40%]">
        <img
          src={computer}
          alt="Computer"
          className="w-72 h-72 md:w-80 md:h-80 xl:w-96 xl:h-96"
        />
      </div>
      <div className="flex flex-col gap-y-20 md:basis-[60%]">
        <div className="flex flex-wrap justify-evenly items-center gap-y-6 text-3xl text-center font-bold md:text-4xl md:gap-x-4 xl:text-5xl 2xl:text-6xl">
          <p>Discover.</p>
          <p>Visualize.</p>
          <p>Develop.</p>
        </div>
        <div className="flex flex-col gap-y-6 text-center">
          <p className="text-small font-bold md:text-lg xl:text-xl">
            Hi there,
          </p>
          <p className="text-2xl font-bold md:text-3xl xl:text-4xl xl:text-5xl">
            I'm Kevin Morco.
          </p>
          <p className="text-2xl font-bold md:text-3xl xl:text-4xl">
            Dedicated Web Developer
          </p>
          <div className="italic md:text-lg">
            <p>Passionate about Programming and Continuous Learning.</p>
          </div>
          <div className="my-2 flex justify-around items-center">
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
              className="w-2/5 p-2 text-center border border-[var(--color-accent)] rounded xl:text-xl"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-y-6 text-center">
          <p className="text-3xl font-semibold">Personalize Theme</p>
          <p className="text-medium font-medium italic xl:text-lg">
            Choose a theme that suits your preference.
          </p>
          <div className="flex justify-evenly">
            <div
              className="w-4 h-4 bg-[#000] rounded-full border-2 border-accent md:w-6 md:h-6 2xl:w-8 xl:h-8"
              onClick={() => setTheme("classicBlackAndWhite")}
            ></div>
            <div
              className="w-4 h-4 bg-[#7b34d4] rounded-full md:w-6 md:h-6 2xl:w-8 xl:h-8"
              onClick={() => setTheme("twilightBliss")}
            ></div>
            <div
              className="w-4 h-4 bg-[#e44a40] rounded-full md:w-6 md:h-6 2xl:w-8 xl:h-8"
              onClick={() => setTheme("bloodMoon")}
            ></div>
            <div
              className="w-4 h-4 bg-[#428439] rounded-full md:w-6 md:h-6 2xl:w-8 xl:h-8"
              onClick={() => setTheme("rainforestExplore")}
            ></div>
            <div
              className="w-4 h-4 bg-[#12CEF7] rounded-full md:w-6 md:h-6 2xl:w-8 xl:h-8"
              onClick={() => setTheme("blessedAqua")}
            ></div>
            <div
              className="w-4 h-4 bg-[#fff] rounded-full md:w-6 md:h-6 2xl:w-8 xl:h-8"
              onClick={() => setTheme("classicWhiteAndBlack")}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
