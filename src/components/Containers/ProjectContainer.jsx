import React from "react";
import Card from "../Card";
import project from "../../projects/projects";

const ProjectContainer = () => {
  return (
    <section className="flex flex-col gap-y-12">
      <p className="text-3xl font-bold">Projects</p>
      <div className="flex flex-col gap-y-10">
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
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectContainer;
