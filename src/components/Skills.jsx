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
    <section className="flex flex-col gap-y-12" id="skills">
      <div className="flex items-center gap-x-4">
        <div className="w-10 border-t-2 border-[var(--color-accent)]"></div>
        <p className="text-3xl font-bold">Tech Stacks </p>
        <div className="w-10 border-t-2 border-[var(--color-accent)]"></div>
      </div>
      <ul className="flex flex-wrap justify-around items-center gap-x-4 gap-y-10 text-medium font-semibold">
        <li className="flex items-center gap-x-2">
          <span className="text-js">
            <IconBrandJavascript size={32} />
          </span>
          Javascript
        </li>
        <li className="flex items-center gap-x-2">
          <span className="text-css">
            <IconBrandCss3 size={32} />
          </span>
          CSS
        </li>
        <li className="flex items-center gap-x-2">
          <span className="text-html">
            <IconBrandHtml5 size={32} />
          </span>
          HTML
        </li>
        <li className="flex items-center gap-x-2">
          <span className="text-react">
            <IconBrandReact size={32} />
          </span>
          React
        </li>
        <li className="flex items-center gap-x-2">
          <span className="text-tailwind">
            <IconBrandTailwind size={32} />
          </span>
          Tailwind
        </li>
        <li className="flex items-center gap-x-2">
          <span className="text-git">
            <IconBrandGit size={32} />
          </span>
          Git
        </li>
        <li className="flex items-center gap-x-2">
          <span className="text-bootstrap">
            <IconBrandBootstrap size={32} />
          </span>
          Bootstrap
        </li>
      </ul>
    </section>
  );
};

export default Skills;
