import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import ProjectCard from "./projectCard";
import { AiFillBuild } from "react-icons/ai";

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const projects = [
    {
      title: "FaDO",
      subtitle: "ML-driven tool for fraud detection",
      description:
        "FaDO is an algorithmic solution for monitoring financial transactions. It has tons of features, accepts an encrypted transactions file and then process, read, visualize and calculate the APIs ...",
      technologies: ["React", "Node.js", "Redux", "Websocket"],
      externalLink: "https://demo.fado.life",
      githubLink: "https://github.com/ammarhd/FaDO-React",
      imageLink: "/images/fado.png",
    },
    {
      title: "My Portfolio",
      subtitle: "Interactive modern portfolio",
      description:
        "A one-page portfolio website that shows some of my projects, skills, and experience. ",
      technologies: ["Next", "Tailwind", "Framer-motion"],
      externalLink: "",
      githubLink: "",
      imageLink: "/images/portfolio.png",
    },
    {
      title: "QTLaaS",
      subtitle: "Orchestration of QTL as a service",
      description:
        "Automating the creation and configuration of the cloud infrastructures: number of instances and all their details. Four students contribute to this work.",

      technologies: ["React", "Node.js", "Python", "Terraform"],
      externalLink: "https://qtl.netlify.app/",
      githubLink: "https://github.com/oliviamikaela/cloud_computing_project",
      imageLink: "/images/qlt.png",
    },
    {
      title: "Data visualization",
      subtitle: "Visualizations of Twitter data",
      description:
        "An extension of previous work so the interactive visualizations can run in the browser without server. Only dummy data is provided by me - you have to collect real data with your own Twitter credentials.",

      technologies: ["React", "D3.js"],
      externalLink: "https://twittervisual.netlify.app/",
      githubLink: "https://github.com/lamastex/twitterVisualizations",
      imageLink: "/images/twittervis.png",
    },
    {
      title: "Pathways",
      subtitle: "ScaDaMaLe Course Pathways",
      description:
        "The implementation and automation for all the configuration of a library that creates pathways so it can be updated and create new content using just a JSON file. ",

      technologies: ["React", "Tailwind", "react-archer"],
      externalLink: "https://lamastex.github.io/ScaDaMaLe/",
      githubLink: "https://github.com/lamastex/coursepaths",
      imageLink: "/images/pathways.png",
    },
  ];
  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);
  return (
    <>
      <div className="w-full  mx-auto mt-10 md:mt-20  max-w-screen-md">
        <div id="section" className="flex flex-col space-y-4">
          <div
            id="title"
            className="font-bold text-2xl sm:text-3xl flex justify-start items-center space-x-2  "
          >
            <AiFillBuild />
            <div>Projects</div>
          </div>
          <div
            id="subtitle"
            className=" text-lg dark:text-white-700 text-black-700"
          >
            Here are some of my latest projects that I enjoyed coding and
            designing from scratch, both with a team and alone.
          </div>
        </div>
      </div>
      <div className=" w-full  mx-auto  max-w-screen-lg sm:px-10 md:px-0 xs:px-0  ">
        <div className="grid grid-cols-1 gap-5 w-full" ref={ref}>
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              rightShift={i % 2 === 0}
              {...project}
              controls={controls}
              custom={i}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
