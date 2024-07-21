import React from "react";
import computer from "../images/hero/computer.png";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
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

  return (
    <section className="flex flex-col items-center" id="intro">
      <div>
        <img src={computer} alt="Computer" className="w-72 h-72" />
      </div>
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-wrap justify-evenly items-center gap-y-6 text-3xl text-center font-bold">
          <p>Discover.</p>
          <p>Visualize.</p>
          <p>Develop.</p>
        </div>
        <div className="my-14 flex flex-col gap-y-6 text-center">
          <p className="text-small font-bold">Hi there,</p>
          <p className="text-2xl font-bold">I'm Kevin Morco.</p>
          <p className="text-2xl font-bold">Dedicated Web Developer</p>
          <div className="italic">
            <p>Passionate about Programming and Continuous Learning.</p>
          </div>
          <div className="my-2 flex justify-around items-center">
            <a
              href="https://github.com/KevinChristopherMorco"
              target="_blank"
              className="w-1/3 p-2 bg-[var(--color-accent)] text-[var(--color-text-accent)] text-center transition ease-in-out hover:scale-110"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-christopher-morco-a9a361289/"
              target="__blank"
              className="w-2/5 p-2 text-center border border-[var(--color-accent)]"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-y-6 text-center">
          <p className="text-3xl font-semibold">Personalize Theme</p>
          <p className="text-medium font-medium italic">
            Choose a theme that suits your preference.
          </p>
          <div className="flex justify-evenly">
            <div
              className="w-4 h-4 bg-[#000] rounded-full border-2 border-accent"
              onClick={() => setTheme("classicBlackAndWhite")}
            ></div>
            <div
              className="w-4 h-4 bg-[#7b34d4] rounded-full"
              onClick={() => setTheme("twilightBliss")}
            ></div>
            <div
              className="w-4 h-4 bg-[#e44a40] rounded-full"
              onClick={() => setTheme("bloodMoon")}
            ></div>
            <div
              className="w-4 h-4 bg-[#428439] rounded-full"
              onClick={() => setTheme("rainforestExplore")}
            ></div>
            <div
              className="w-4 h-4 bg-[#12CEF7] rounded-full"
              onClick={() => setTheme("blessedAqua")}
            ></div>
            <div
              className="w-4 h-4 bg-[#fff] rounded-full"
              onClick={() => setTheme("classicWhiteAndBlack")}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
