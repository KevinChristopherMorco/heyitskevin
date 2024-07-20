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
    <div className="min-h-96 flex flex-col justify-between gap-y-6 bg-[var(--color-secondary)] rounded-lg">
      <div className="h-72">
        <img
          src={require(`../images/project-card/${image}`)}
          alt="image"
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="p-4 flex flex-col gap-y-8">
        <div className="text-center">
          <div className="flex flex-col gap-y-2">
            <p className="text-xl font-semibold">{title}</p>
            <p className="text-sm">{subTitle}</p>
          </div>
        </div>
        <div className="text-center">
          <p>{description}</p>
        </div>
        <ul className="flex flex-wrap justify-around gap-y-6">
          {projectStack.map((stack, index) => {
            switch (stack) {
              case "javascript":
                return (
                  <li key={index} className="text-js">
                    <IconBrandJavascript size={40} />
                  </li>
                );
              case "css":
                return (
                  <li key={index} className="text-css">
                    <IconBrandCss3 size={40} />
                  </li>
                );
              case "html":
                return (
                  <li key={index} className="text-html">
                    <IconBrandHtml5 size={40} />
                  </li>
                );
              case "react":
                return (
                  <li key={index} className="text-react">
                    <IconBrandReact size={40} />
                  </li>
                );
              case "tailwind":
                return (
                  <li key={index} className="text-tailwind">
                    <IconBrandTailwind size={40} />
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
          className="w-1/2 p-2 flex justify-evenly items-center bg-[var(--color-accent)] text-[var(--color-text-accent)] text-center font-bold"
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
