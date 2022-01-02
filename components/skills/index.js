import { useAnimation, motion } from "framer-motion";

import React, { useEffect } from "react";
import { FaReact, FaVuejs, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";
import { DiScala } from "react-icons/di";
import { SiNextdotjs, SiDatabricks, SiTerraform } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { GiSkills } from "react-icons/gi";

const skills = [
  {
    name: "React",
    href: "https://reactjs.org",
    icon: "react",
    size: "30",
  },
  {
    name: "Next",
    href: "https://reactjs.org",
    icon: "next",
    size: "30",
  },

  {
    name: "Node.js",
    href: "https://nodejs.org",
    icon: "node",
    size: "30",
  },
  {
    name: "Vue",
    href: "https://vuejs.org",
    icon: "vue",
    size: "30",
  },
  {
    name: "D3.js",
    href: "https://d3js.org",
    icon: "",
    size: "30",
  },
  {
    name: "Python",
    href: "https://www.python.org",
    icon: "python",
    size: "30",
  },
  {
    name: "Scala",
    href: "https://www.scala-lang.org",
    icon: "scala",
    size: "30",
  },
  {
    name: "Databricks",
    href: "https://databricks.com",
    icon: "databricks",
    size: "30",
  },
  {
    name: "Docker",
    href: "https://www.docker.com",
    icon: "docker",
    size: "30",
  },
  {
    name: "Terraform",
    href: "https://www.terraform.io",
    icon: "terraform",
    size: "30",
  },
];

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);

  return (
    <div className="w-full  mx-auto mt-14 md:mt-20  max-w-screen-md">
      <div id="section" className="pb-5 flex flex-col space-y-4">
        <div
          id="title"
          className="font-bold text-2xl sm:text-3xl  flex justify-start items-center space-x-2  "
        >
          <GiSkills />
          <div>Skills</div>
        </div>
        <div
          id="subtitle"
          className=" text-lg dark:text-white-700 text-black-700"
        >
          I am passionate about using cutting-edge technologies. These are the
          tools I am most familiar with and build things every day.
        </div>
      </div>
      <div>
        <div className=" mt-8 grid grid-cols-3 sm:grid-cols-4 gap-6" ref={ref}>
          {skills.map((skill, i) => (
            <motion.a
              key={i}
              className="flex flex-col justify-center items-center pt-3 pb-2 text-center px-auto dark:bg-gray-900 dark:bg-opacity-60 rounded-md bg-whiteTheme"
              style={{
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.10)",
              }}
              target="_blank"
              href={skill.href}
              whileHover="hover"
              initial="initial"
              variants={{
                initial: {
                  opacity: 0,
                },
                hover: {
                  y: -3,
                },
              }}
              animate={controls}
              custom={i}
            >
              {skill.icon == "node" ? (
                <FaNodeJs size={skill.size} />
              ) : skill.icon == "react" ? (
                <FaReact size={skill.size} />
              ) : skill.icon == "next" ? (
                <SiNextdotjs size={skill.size} />
              ) : skill.icon == "vue" ? (
                <FaVuejs size={skill.size} />
              ) : skill.icon == "python" ? (
                <FaPython size={skill.size} />
              ) : skill.icon == "scala" ? (
                <DiScala size={skill.size} />
              ) : skill.icon == "databricks" ? (
                <SiDatabricks size={skill.size} />
              ) : skill.icon == "docker" ? (
                <FaDocker size={skill.size} />
              ) : skill.icon == "terraform" ? (
                <SiTerraform size={skill.size} />
              ) : (
                <></>
              )}
              {skill.name == "D3.js" ? (
                <p className="  text-xl font-medium text-black-700 dark:text-white-700">
                  {skill.name}
                </p>
              ) : (
                <p className="mt-2 text-base font-medium text-black-700 dark:text-white-700">
                  {skill.name}
                </p>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
