import React from "react";
import author from "../images/author/grad-pic.png";

import {
  IconBrandAdobePhotoshop,
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandFigma,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandVisualStudio,
} from "@tabler/icons-react";

import development from "../images/about-card/web-development.png";
import graphics from "../images/about-card/graphic-design.png";

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
      <div className="flex flex-col gap-y-14">
        <p className="text-2xl lg:text-4xl">Tech Stacks </p>
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
        <p className="text-2xl lg:text-4xl">Softwares </p>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-10 text-base font-semibold md:text-2xl md:gap-x-10 lg:text-3xl lg:gap-x-16 xl:gap-x-20">
          <li className="flex items-center gap-x-2 xl:gap-x-4">
            <span className="text-photoshop">
              <IconBrandVisualStudio className="md:w-12 md:h-12 lg:w-14 lg:h-14" />
            </span>
            Visual Studio
          </li>
          <li className="flex items-center gap-x-2 xl:gap-x-4">
            <span className="text-git">
              <IconBrandGit className="md:w-12 md:h-12 lg:w-14 lg:h-14" />
            </span>
            Bash
          </li>
          <li className="flex items-center gap-x-2 xl:gap-x-4">
            <span className="text-photoshop">
              <IconBrandAdobePhotoshop className="md:w-12 md:h-12 lg:w-14 lg:h-14" />
            </span>
            Photoshop
          </li>
          <li className="flex items-center gap-x-2 xl:gap-x-4">
            <span className="text-figma">
              <IconBrandFigma className="md:w-12 md:h-12 lg:w-14 lg:h-14" />
            </span>
            Figma
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-y-14">
        <p className="text-2xl lg:text-4xl">Skills </p>
        <div className="flex flex-col gap-y-32">
          <div className="flex flex-col gap-y-10 text-center">
            <p className="text-xl font-500">Web Design and Development</p>
            <p>
              I'm passionate about creating beautiful and user-friendly web
              designs that makes browsing a smooth experience for the users.
              Whether it's building a responsive layout or adding dynamic
              features, I enjoy every step of the process and strive to deliver
              websites that not only look great but also perform flawlessly.
              Currently using HTML5, CSS3 and JavaScript
            </p>
            <img src={development} alt="Web Development" />
          </div>

          <div className="flex flex-col gap-y-10 text-center">
            <p className="text-xl font-500">Graphic Design</p>
            <p>
              In addition to my web design and development skills, I enjoy doing
              graphic designs. I like to create eye-catching thumbnails and
              posters that effectively communicate the intended message and
              captivate the audience. Since having a great graphics design
              increases user engagement.
            </p>
            <img src={graphics} alt="Web Development" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
