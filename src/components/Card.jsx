import React from "react";
import { IconDeviceGamepad2, IconTerminal2 } from "@tabler/icons-react";

const Card = ({
  image,
  title,
  subTitle,
  description,
  liveLink,
  sourceLink,
}) => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-between border-2 border-accent">
      <div className="h-72">
        <img
          src={require(`../images/project-card/${image}`)}
          alt="image"
          className="w-full h-full"
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
      </div>
      <div className="py-4 flex justify-around">
        <a
          href={liveLink}
          target="__blank"
          className="w-1/2 p-2 flex justify-evenly items-center bg-accent text-primary text-center font-bold"
        >
          <IconDeviceGamepad2 size={20} /> Live Site
        </a>
        <a
          href={sourceLink}
          target="__blank"
          className="w-2/5 p-2 flex justify-evenly items-center text-center border border-accent"
        >
          <IconTerminal2 /> Source
        </a>
      </div>
    </div>
  );
};

export default Card;
