import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Review = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start(() => ({
        opacity: 1,
        transition: { delay: (2 + 2) * 0.2 },
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
        <div className="flex flex-col rounded-lg bg-white-700 dark:bg-black-900 p-5  shadow-lg my-20 bg-opacity-30  ">
          <div
            id="review"
            className="pb-3 dark:text-white-700 text-black-700 opacity-70  "
          >
            We employed Ammar for a short project re. an web implementation of
            our tools for FADO. Ammar delivered meticulously, and helped
            manoeuvre this fast paced field. The resulting code base is an
            example of how a well executed software project should look like.
          </div>
          <div id="info" className="flex justify-start items-center space-x-3 ">
            <img
              className="w-12 h-12 rounded-full "
              src="/images/kristiaan.png"
              alt=""
              width="384"
              height="512"
            />

            <div className="flex flex-col justify-center">
              <div>Kristiaan Pelckmans</div>
              <div className="text-sm dark:text-white-700 text-black-700">
                CEO of FADO and CTO of PercyRoc.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Review;
