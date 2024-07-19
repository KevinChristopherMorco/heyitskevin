import React from "react";
import {
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandTailwind,
} from "@tabler/icons-react";

const Skills = () => {
  return (
    <section className="flex flex-col gap-y-12">
      <p className="text-3xl font-bold">Tech Stacks</p>
      <ul className="flex flex-col items-center gap-y-10 text-xl">
        <li className="w-2/3 flex justify-center items-center gap-x-2">
          <span className="text-js">
            <IconBrandJavascript size={40} />
          </span>
          Javascript
        </li>
        <li className="w-2/3 flex justify-center items-center gap-x-2">
          <span className="text-css">
            <IconBrandCss3 size={40} />
          </span>
          CSS
        </li>
        <li className="w-2/3 flex justify-center items-center gap-x-2">
          <span className="text-html">
            <IconBrandHtml5 size={40} />
          </span>
          HTML
        </li>
        <li className="w-2/3 flex justify-center items-center gap-x-2">
          <span className="text-react">
            <IconBrandReact size={40} />
          </span>
          React
        </li>
        <li className="w-2/3 flex justify-center items-center gap-x-2">
          <span className="text-tailwind">
            <IconBrandTailwind size={40} />
          </span>
          Tailwind
        </li>
        <li className="w-2/3 flex justify-center items-center gap-x-2">
          <span className="text-bootstrap">
            <IconBrandBootstrap size={40} />
          </span>
          Bootstrap
        </li>
        <li className="w-2/3 flex justify-center items-center gap-x-2">
          <span className="text-git">
            <IconBrandGit size={40} />
          </span>
          Git
        </li>
      </ul>
    </section>
  );
};

export default Skills;
