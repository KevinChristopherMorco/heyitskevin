import React from "react";
import author from "../images/author/grad-pic.png";

import {
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandTailwind,
} from "@tabler/icons-react";

const About = () => {
  return (
    <section className="flex flex-col gap-y-20" id="about">
      <p className="mb-6 flex items-center gap-x-4 text-3xl font-bold before:h-[0.2rem] before:w-[3rem] before:bg-[var(--color-accent)] after:h-[0.2rem] after:w-[3rem] after:bg-[var(--color-accent)] md:text-4xl md:before:hidden md:after:w-[20rem] lg:mb-32 lg:after:w-[36rem] lg:text-5xl ">
        Who am I?
      </p>
      <div className="flex flex-col gap-y-20 xl:flex-row-reverse xl:items-center">
        <img
          src={author}
          alt="author"
          className="w-52 h-52 m-auto xl:w-64 xl:h-64"
        />
        <p className="text-center md:text-xl xl:text-start xl:basis-[70%]">
          Hi!, I'm Kevin Christopher Morco a graduate at Laguna State
          Polytechnic University. I do love programming and creating web designs
          and their corresponding functionalities I have strong attention to
          details and willingly to collaborate for the success of every project,
          also willing to try new things especially on tech stacks to enhance my
          skills further.
        </p>
      </div>
      <div className="flex flex-col gap-y-10">
        <p className="text-3xl lg:text-4xl">Tech Stacks </p>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-10 text-base font-semibold md:text-2xl md:gap-x-10 lg:text-3xl lg:gap-x-16 xl:gap-x-20">
          <li className="flex items-center gap-x-2 xl:gap-x-4">
            <span className="text-js">
              <IconBrandJavascript className="md:w-12 md:h-12 lg:w-14 lg:h-14" />
            </span>
            Javascript
          </li>
          <li className="flex items-center gap-x-2 xl:gap-x-4">
            <span className="text-css">
              <IconBrandCss3 className="md:w-12 md:h-12 lg:w-14 lg:h-14" />
            </span>
            CSS
          </li>
          <li className="flex items-center gap-x-2 xl:gap-x-4">
            <span className="text-html">
              <IconBrandHtml5 className="md:w-12 md:h-12 lg:w-14 lg:h-14" />
            </span>
            HTML
          </li>
          <li className="flex items-center gap-x-2 xl:gap-x-4">
            <span className="text-react">
              <IconBrandReact className="md:w-12 md:h-12 lg:w-14 lg:h-14" />
            </span>
            React
          </li>
          <li className="flex items-center gap-x-2 xl:gap-x-4">
            <span className="text-tailwind">
              <IconBrandTailwind className="md:w-12 md:h-12 lg:w-14 lg:h-14" />
            </span>
            Tailwind
          </li>
          <li className="flex items-center gap-x-2 xl:gap-x-4">
            <span className="text-git">
              <IconBrandGit className="md:w-12 md:h-12 lg:w-14 lg:h-14" />
            </span>
            Git
          </li>
          <li className="flex items-center gap-x-2">
            <span className="text-bootstrap">
              <IconBrandBootstrap className="md:w-12 md:h-12 lg:w-14 lg:h-14" />
            </span>
            Bootstrap
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
