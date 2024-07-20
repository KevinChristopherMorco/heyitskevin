import React from "react";
import { IconX, IconLanguageHiragana } from "@tabler/icons-react";
import logo from "../images/logo/dark-theme.png";
import { useState } from "react";

const Hamburger = ({ isActive, setActive }) => {
  return (
    <div
      className={`fixed bg-[#00000080] ${
        isActive ? "w-full h-full flex justify-end" : "w-0 h-0"
      }`}
    >
      <div
        className={`w-3/5 h-full fixed transition-all ease-in-out delay-50	bg-primary text-accent
        ${isActive ? "right-0" : "-right-full"}`}
      >
        <div className="flex px-6 py-5 justify-between items-center border-b border-gray-100">
          <div className="cursor-pointer" onClick={() => setActive(false)}>
            <IconX />
          </div>
          <div className="cursor-pointer" onClick={() => setActive(false)}>
            <IconLanguageHiragana />
          </div>
        </div>
        <div className="h-1/3 mt-8 px-6 flex flex-col justify-between text-lg">
          <a href="#intro" onClick={() => setActive(false)}>
            Intro
          </a>
          <a href="#about" onClick={() => setActive(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setActive(false)}>
            Tech Stacks
          </a>
          <a href="#projects" onClick={() => setActive(false)}>
            Projects
          </a>
          <a href="#contacts" onClick={() => setActive(false)}>
            Contacts
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
