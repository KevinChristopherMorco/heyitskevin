import React from "react";
import { useThemeContext } from "../../hooks/Providers/ThemeProvider";
import useActiveList from "../../hooks/useActiveList";
import { IconMenu2, IconLanguageHiragana } from "@tabler/icons-react";

import logo from "../../images/logo/logo.png";
import darkLogo from "../../images/logo/logo-dark.png";

const Header = ({ isActive: { list }, setActive }) => {
  const { theme } = useThemeContext();
  return (
    <header className="fixed w-[90%] left-1/2 -translate-x-1/2 z-[999]">
      <nav className="w-full bg-[var(--color-primary)] text-accent border-2 border-[var(--color-accent)]">
        <div className="flex justify-between items-stretch md:hidden">
          <div className="m-4">
            <img
              src={
                theme === "classicWhiteAndBlack" ||
                theme === "rainforestExplore" ||
                theme === "blessedAqua"
                  ? darkLogo
                  : logo
              }
              className="h-8 w-8"
            />
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
            <img
              src={
                theme === "classicWhiteAndBlack" ||
                theme === "rainforestExplore" ||
                theme === "blessedAqua"
                  ? darkLogo
                  : logo
              }
              className="h-8 w-8 xl:h-10 xl:w-10 "
            />
          </div>
          <div className="h-[5rem] w-[100%] flex justify-center items-end xl:self-stretch">
            <ul className="w-[50%] flex justify-between items-center text-lg border-2 border-b-0 border-[var(--color-accent)] rounded-tl-2xl rounded-tr-2xl xl:h-[70%]">
              <li
                className={`flex items-center self-stretch grow text-center  border-r border-b-0  border-[var(--color-accent)] ${
                  list === "intro" || list === null
                    ? "text-[var(--color-active)] font-extrabold"
                    : "text-[var(--color-inactive)]"
                }`}
              >
                <a
                  href="#intro"
                  onClick={() => setActive("list", "intro")}
                  className="w-full"
                >
                  Intro
                </a>
              </li>
              <li
                className={`flex items-center self-stretch grow text-center border-r border-b-0 border-[var(--color-accent)] ${
                  list === "about"
                    ? "text-[var(--color-active)] font-extrabold"
                    : "text-[var(--color-inactive)]"
                }`}
              >
                <a
                  href="#about"
                  onClick={() => setActive("list", "about")}
                  className="w-full"
                >
                  About
                </a>
              </li>
              <li
                className={`flex items-center self-stretch grow text-center border-r border-b-0 border-[var(--color-accent)] ${
                  list === "projects"
                    ? "text-[var(--color-active)] font-extrabold"
                    : "text-[var(--color-inactive)]"
                }`}
              >
                <a
                  href="#projects"
                  onClick={() => setActive("list", "projects")}
                  className="w-full"
                >
                  Projects
                </a>
              </li>
              <li
                className={`flex items-center self-stretch grow text-center ${
                  list === "contacts"
                    ? "text-[var(--color-active)] font-extrabold"
                    : "text-[var(--color-inactive)]"
                }`}
              >
                <a
                  href="#contacts"
                  onClick={() => setActive("list", "contacts")}
                  className="w-full"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>
          <div className="m-4 xl:text-6xl">
            <IconLanguageHiragana
              className={`w-8 h-8 xl:w-10 xl:h-10 ${
                (theme === "classicWhiteAndBlack" ||
                  theme === "rainforestExplore" ||
                  theme === "blessedAqua") &&
                "text-[#000]"
              }`}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
