import React, { forwardRef } from "react";
import { useInView } from "react-intersection-observer";
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
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`defaultSlideInView min-h-96 flex flex-col justify-between gap-y-6 bg-[var(--color-secondary)] rounded-lg md:w-[45%] ${
        inView && "animateSlideIn"
      }`}
    >
      <div className="h-72 md:h-52 xl:h-96">
        <img
          src={require(`../../images/project-card/${image}`)}
          alt="image"
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="p-4 flex flex-col gap-y-8 xl:gap-y-16">
        <div className="text-center">
          <div className="flex flex-col gap-y-4">
            <p className="text-xl font-semibold md:text-2xl xl:text-3xl 2xl:text-4xl">
              {title}
            </p>
            <p className="text-sm md:text-base xl:text-xl 2xl:text-2xl">
              {subTitle}
            </p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-base md:text-xl xl:text-2xl 2xl:text-3xl">
            {description}
          </p>
        </div>
        <ul className="flex flex-wrap justify-evenly gap-y-6">
          {projectStack.map((stack, index) => {
            switch (stack) {
              case "javascript":
                return (
                  <li key={index} className="text-js">
                    <IconBrandJavascript className="w-10 h-10 xl:w-12 xl:h-12  2xl:w-14 2xl:h-14" />
                  </li>
                );
              case "css":
                return (
                  <li key={index} className="text-css">
                    <IconBrandCss3 className="w-10 h-10 xl:w-12 xl:h-12  2xl:w-14 2xl:h-14" />
                  </li>
                );
              case "html":
                return (
                  <li key={index} className="text-html">
                    <IconBrandHtml5 className="w-10 h-10 xl:w-12 xl:h-12  2xl:w-14 2xl:h-14" />
                  </li>
                );
              case "react":
                return (
                  <li key={index} className="text-react">
                    <IconBrandReact className="w-10 h-10 xl:w-12 xl:h-12  2xl:w-14 2xl:h-14" />
                  </li>
                );
              case "tailwind":
                return (
                  <li key={index} className="text-tailwind">
                    <IconBrandTailwind className="w-10 h-10 xl:w-12 xl:h-12  2xl:w-14 2xl:h-14" />
                  </li>
                );
              default:
                return null;
            }
          })}
        </ul>
      </div>
      <div className="py-4 flex justify-around items-center xl:text-xl xl:jsutify-center xl:gap-x-12 xl:w-[80%] xl:mx-auto ">
        <a
          href={liveLink}
          target="__blank"
          className="w-1/2 p-2 flex justify-center gap-x-4 items-center bg-[var(--color-accent)] text-[var(--color-text-accent)] text-center font-bold transition ease-in-out rounded hover:scale-105"
        >
          <IconDeviceGamepad2 size={20} /> Live Site
        </a>
        <a
          href={sourceLink}
          target="__blank"
          className="w-2/5 p-2 flex justify-center gap-x-4 items-center text-center border border-[var(--color-text)] rounded"
        >
          <IconTerminal2 /> Source
        </a>
      </div>
    </div>
  );
};

export default Card;
