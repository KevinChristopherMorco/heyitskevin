import React from "react";
import { useThemeContext } from "../../hooks/Providers/ThemeProvider";
import { IconMenu2, IconLanguageHiragana } from "@tabler/icons-react";

import logo from "../../images/logo/logo.png";

const Header = ({ setActive }) => {
  const { theme } = useThemeContext();
  return (
    <header className="fixed w-[90%] left-1/2 -translate-x-1/2 md:w-[80%] z-[999]">
      <nav className="bg-[var(--color-header)] text-accent border-2 border-[var(--color-accent)] rounded-xl">
        <div className="flex justify-between items-stretch md:hidden">
          <div className="m-4">
            <img src={logo} className="h-8 w-8" />
          </div>
          <div className="flex items-end">
            <button
              className="h-4/5 p-3 border-t-2 border-l-2 rounded-tl-xl border-[var(--color-accent)] text-[var(--color-text)] text-lg cursor-pointer "
              onClick={() => setActive("hamburger", true)}
            >
              <IconMenu2 size={25} />
            </button>
          </div>
        </div>

        <div className="hidden md:flex md:justify-between md:items-center">
          <div className="m-4">
            <img src={logo} className="h-8 w-8" />
          </div>
          <div
            className={`w-3/4 px-6 flex justify-evenly text-lg ${
              theme === "classicBlackAndWhite" ||
              theme === "classicWhiteAndBlack"
                ? "text-[var(--color-accent)]"
                : "text-[var(--color-text-accent)]"
            }`}
          >
            <a href="#intro">Intro</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">Contacts</a>
          </div>
          <div className="m-4">
            <IconLanguageHiragana className="w-8 h-8" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
