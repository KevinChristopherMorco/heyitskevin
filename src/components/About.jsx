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
      <div className="flex items-center gap-x-4">
        <div className="w-10 border-t-2 border-[var(--color-accent)]"></div>
        <p className="text-3xl font-bold md:text-4xl">Who am I? </p>
        <div className="w-10 border-t-2 border-[var(--color-accent)]"></div>
      </div>
      <div className="flex flex-col gap-y-20">
        <img src={author} alt="author" className="w-52 h-52 m-auto" />
        <p className="text-center md:text-xl">
          Hi!, I'm Kevin Christopher Morco a graduate at Laguna State
          Polytechnic University. I do love programming and creating web designs
          and their corresponding functionalities I have strong attention to
          details and willingly to collaborate for the success of every project,
          also willing to try new things especially on tech stacks to enhance my
          skills further.
        </p>
      </div>
      <div className="flex flex-col gap-y-10">
        <p className="text-3xl">Tech Stacks </p>
        <ul className="flex flex-wrap justify-around items-center gap-y-10 text-base font-semibold md:text-2xl md:gap-x-6">
          <li className="flex items-center gap-x-2">
            <span className="text-js">
              <IconBrandJavascript className="md:w-12 md:h-12" />
            </span>
            Javascript
          </li>
          <li className="flex items-center gap-x-2">
            <span className="text-css">
              <IconBrandCss3 className="md:w-12 md:h-12" />
            </span>
            CSS
          </li>
          <li className="flex items-center gap-x-2">
            <span className="text-html">
              <IconBrandHtml5 className="md:w-12 md:h-12" />
            </span>
            HTML
          </li>
          <li className="flex items-center gap-x-2">
            <span className="text-react">
              <IconBrandReact className="md:w-12 md:h-12" />
            </span>
            React
          </li>
          <li className="flex items-center gap-x-2">
            <span className="text-tailwind">
              <IconBrandTailwind className="md:w-12 md:h-12" />
            </span>
            Tailwind
          </li>
          <li className="flex items-center gap-x-2">
            <span className="text-git">
              <IconBrandGit className="md:w-12 md:h-12" />
            </span>
            Git
          </li>
          <li className="flex items-center gap-x-2">
            <span className="text-bootstrap">
              <IconBrandBootstrap className="md:w-12 md:h-12" />
            </span>
            Bootstrap
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
