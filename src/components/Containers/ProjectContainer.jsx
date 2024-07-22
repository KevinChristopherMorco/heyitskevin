import React from "react";
import Card from "../Card";
import project from "../../projects/projects";

const ProjectContainer = () => {
  return (
    <section className="flex flex-col gap-y-12" id="projects">
      <div className="flex items-center gap-x-4">
        <div className="w-10 border-t-2 border-[var(--color-accent)]"></div>
        <p className="text-3xl font-bold md:text-4xl">Projects </p>
        <div className="w-10 border-t-2 border-[var(--color-accent)]"></div>
      </div>{" "}
      <div className="flex flex-col gap-y-20 md:flex-row flex-wrap md:justify-around">
        {project.map((project, index) => {
          return (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              subTitle={project.subtitle}
              description={project.information}
              liveLink={project.liveRef}
              sourceLink={project.gitRef}
              projectStack={project.stack}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectContainer;
