import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import AboutMobile from "./mobile";

import MediaIcon from "../mediaIcon";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start(() => ({
        opacity: 1,
        transition: { delay: (3 + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);
  return (
    <div className="w-full mx-auto mt-28 md:mt-44 max-w-screen-md  ">
      <div className="hidden  w-full sm:flex justify-center items-center ">
        <div
          id="about"
          className=" w-full  flex justify-between items-start sm:px-5 "
        >
          <div id="aboutText" className=" flex flex-col pt-5  space-y-3 ">
            <div id="name" className="font-bold text-2xl">
              Ammar Aldhahyani
            </div>
            <div id="sub" className="font-semibold">
              Hello, I'm a full-stack developer based in Sweden!
            </div>
            <div
              id="discription"
              className="dark:text-white-700 text-black-700 pt-5"
            >
              A full stack engineer and ML/AI enthusiast working in multiple
              areas like building web-sites/applications and writing algorithms
              to solve problems with high efficiency and combine that with a
              good knowledge of creating meaningful experiences through design.
            </div>
          </div>

          <div
            id="picAndContact"
            className=" flex justify-start items-end rounded-md border-gray-700 dark:border-gray-300  "
          >
            <div
              id="pic"
              className=" flex justify-center items-center p-3 rounded-lg w-44 h-44"
            >
              <motion.img
                src="/images/ammar.jpg"
                alt="me"
                className="border-2 border-gray-700 dark:border-gray-300  rounded-full w-full "
                variants={{
                  hidden: {
                    scale: 0,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                  },
                }}
                transition={{
                  damping: 5,
                  mass: 1,
                  delay: 0.2,
                }}
                initial="hidden"
                animate="visible"
              />
            </div>
            <div id="contactsScreen" className="relative" ref={ref}>
              <motion.div
                className="relative flex items-center"
                initial="initial"
                variants={{
                  initial: {
                    opacity: 0,
                  },
                }}
                animate={controls}
              >
                <div className="flex flex-col space-y-3">
                  <MediaIcon
                    icon="github"
                    href="https://github.com/ammarhd"
                    size={"18"}
                  />

                  <MediaIcon
                    icon="linkedin"
                    href="https://www.linkedin.com/in/ammar-aldhahyani-99b717149/"
                    size={"18"}
                  />
                  <MediaIcon
                    icon="twitter"
                    href="https://twitter.com/ammar_aldahiani"
                    size={"18"}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden  w-full flex justify-center items-center ">
        <AboutMobile />
      </div>
    </div>
  );
};

export default About;
