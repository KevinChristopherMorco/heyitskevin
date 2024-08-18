import React from "react";
import { IconX, IconLanguageHiragana } from "@tabler/icons-react";

const Hamburger = ({ isActive: { hamburger }, setActive }) => {
  return (
    <div
      className={`fixed bg-[#00000080] z-[9999] ${
        hamburger ? "w-full h-full flex justify-end" : "w-0 h-0"
      }`}
    >
      <div
        className={`w-3/5 h-full fixed transition-all ease-in-out delay-50 bg-[var(--color-primary)] text-[var(--color-text)]
        ${hamburger ? "right-0" : "-right-full"}`}
      >
        <div className="flex px-6 py-5 justify-between items-center border-b border-[var(--color-text)]">
          <div
            className="cursor-pointer"
            onClick={() => setActive("hamburger")}
          >
            <IconX />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setActive("hamburger")}
          >
            <IconLanguageHiragana />
          </div>
        </div>
        <div className="h-1/3 mt-8 px-6 flex flex-col justify-between text-lg">
          <a href="#intro" onClick={() => setActive("hamburger")}>
            Intro
          </a>
          <a href="#about" onClick={() => setActive("hamburger")}>
            About
          </a>
          <a href="#projects" onClick={() => setActive("hamburger")}>
            Projects
          </a>
          <a href="#contacts" onClick={() => setActive("hamburger")}>
            Contacts
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
