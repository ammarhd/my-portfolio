import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import MediaIcon from "../mediaIcon";

const AboutMobile = () => {
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
    <div
      id="about"
      className="w-full flex flex-col justify-center items-center "
    >
      <div id="aboutText" className=" flex flex-col py-5   space-y-3 ">
        <div id="name" className="font-bold text-2xl">
          Ammar Aldhahyani
        </div>
        <div id="sub" className="font-semibold">
          Hello, I&apos;m a full-stack developer based in Sweden!
        </div>
        <div
          id="discription"
          className="dark:text-white-700 text-black-700 pt-5"
        >
          A full stack engineer and ML/AI enthusiast working in multiple areas
          like building web-sites/applications and writing algorithms to solve
          problems with high efficiency and combine that with a good knowledge
          of creating meaningful experiences through design.
        </div>
      </div>
      <div
        id="picAndContact"
        className=" flex-col flex justify-center items-center  rounded-md "
      >
        <div
          id="pic"
          className=" flex justify-center items-center p-5  rounded-lg w-44 h-44"
        >
          <motion.img
            src="/images/ammar.jpg"
            alt="me"
            className="border-2 border-gray-900 dark:border-white  rounded-full w-full "
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
        <div ref={ref}>
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
            <div
              id="contactsMobile"
              className=" w-full flex justify-center align-center space-x-6"
            >
              <MediaIcon
                icon="github"
                href="https://github.com/ammarhd"
                size={"20"}
              />

              <MediaIcon
                icon="linkedin"
                href="https://www.linkedin.com/in/ammar-aldhahyani-99b717149/"
                size={"20"}
              />
              <MediaIcon
                icon="twitter"
                href="https://twitter.com/ammar_aldahiani"
                size={"20"}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMobile;
