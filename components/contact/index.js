import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TiContacts } from "react-icons/ti";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start(() => ({
        opacity: 1,
        transition: { delay: 3 * 0.2 },
      }));
    }
  }, [controls, inView]);
  return (
    <div className="w-full  mx-auto mt-10 md:mt-28   max-w-screen-md" ref={ref}>
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
        <div className="flex flex-col">
          <div id="section" className="pb-5 flex flex-col space-y-4">
            <div
              id="title"
              className="font-bold text-2xl sm:text-3xl  flex justify-start items-center space-x-2  "
            >
              <TiContacts />
              <div>Wanna reach out?</div>
            </div>
            <div
              id="subtitle"
              className=" text-lg dark:text-white-700 text-black-700 sm:w-4/5 "
            >
              Feel free to drop me a message if you have some interesting offer
              or you want to hang out.
            </div>
          </div>
          <div>
            <div className="mt-2">
              <a
                href="mailto:ammar.aldhahyani@gmail.com"
                className="text-base font-medium md:text-xl text-black-900 dark:text-white-900"
              >
                ammar.aldhahyani@gmail.com
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
