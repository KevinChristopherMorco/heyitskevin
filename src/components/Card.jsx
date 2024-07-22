import React from "react";
import {
  IconDeviceGamepad2,
  IconTerminal2,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandTailwind,
} from "@tabler/icons-react";

const Card = ({
  image,
  title,
  subTitle,
  description,
  liveLink,
  sourceLink,
  projectStack,
}) => {
  return (
    <div className="min-h-96 flex flex-col justify-between gap-y-6 bg-[var(--color-secondary)] rounded-lg md:w-[45%]">
      <div className="h-72 md:h-52">
        <img
          src={require(`../images/project-card/${image}`)}
          alt="image"
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="p-4 flex flex-col gap-y-8">
        <div className="text-center">
          <div className="flex flex-col gap-y-4">
            <p className="text-xl font-semibold md:text-2xl">{title}</p>
            <p className="text-sm md:text-base">{subTitle}</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-base md:text-xl">{description}</p>
        </div>
        <ul className="flex flex-wrap justify-around gap-y-6">
          {projectStack.map((stack, index) => {
            switch (stack) {
              case "javascript":
                return (
                  <li key={index} className="text-js">
                    <IconBrandJavascript className="w-10 h-10" />
                  </li>
                );
              case "css":
                return (
                  <li key={index} className="text-css">
                    <IconBrandCss3 className="w-10 h-10" />
                  </li>
                );
              case "html":
                return (
                  <li key={index} className="text-html">
                    <IconBrandHtml5 className="w-10 h-10" />
                  </li>
                );
              case "react":
                return (
                  <li key={index} className="text-react">
                    <IconBrandReact className="w-10 h-10" />
                  </li>
                );
              case "tailwind":
                return (
                  <li key={index} className="text-tailwind">
                    <IconBrandTailwind className="w-10 h-10" />
                  </li>
                );
              default:
                return null;
            }
          })}
        </ul>
      </div>
      <div className="py-4 flex justify-around">
        <a
          href={liveLink}
          target="__blank"
          className="w-1/2 p-2 flex justify-evenly items-center bg-[var(--color-accent)] text-[var(--color-text-accent)] text-center font-bold transition ease-in-out hover:scale-105"
        >
          <IconDeviceGamepad2 size={20} /> Live Site
        </a>
        <a
          href={sourceLink}
          target="__blank"
          className="w-2/5 p-2 flex justify-evenly items-center text-center border border-[var(--color-text)]"
        >
          <IconTerminal2 /> Source
        </a>
      </div>
    </div>
  );
};

export default Card;
