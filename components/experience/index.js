import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { MdWork } from "react-icons/md";

import Item from "./item";

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const experience = [
    {
      title: "Web developer freelancer",
      place: "Worldwide",
      date: "2011 - Now",
    },
    {
      title: "Web developer & Data engineer",
      place: "FaDO, Gothenburg",
      date: "Oct 2020 - Mar 2021",
    },
    {
      title: "Web developer & Data engineer",
      place: "Combient MIX, Stockholm",
      date: "May 2021 - Aug 2021",
    },
    {
      title: "Computer Science",
      place: "Sabanci & Uppsala university",
      date: "Aug 2016 - June 2020",
    },
    {
      title: "Computer Science",
      place: "Uppsala university",
      date: "Aug 2020 - June 2022",
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
    <div className="w-full  mx-auto mt-10 md:mt-32  max-w-screen-md">
      <div className="mt-14 ">
        <div id="section" className="pb-14 flex flex-col space-y-4">
          <div
            id="title"
            className="font-bold text-2xl sm:text-3xl  flex justify-start items-center space-x-2  "
          >
            <MdWork />
            <div>Experience & Education</div>
          </div>
          <div
            id="subtitle"
            className=" text-lg dark:text-white-700 text-black-700"
          >
            Here are some great companies and universities I had the honour to
            join for studying or working on various interesting projects.
          </div>
        </div>
        <div
          className="flex space-y-12 sm:space-y-0 flex-col sm:flex-row justify-between max-w-screen-sm"
          ref={ref}
        >
          <div>
            {experience.slice(0, 3).map((item, i) => (
              <Item
                title={item.title}
                place={item.place}
                date={item.date}
                key={i}
                first={i === 0}
                last={i === 2}
                controls={controls}
                custom={i}
              />
            ))}
          </div>
          <div>
            {experience.slice(3).map((item, i) => (
              <Item
                title={item.title}
                place={item.place}
                date={item.date}
                key={i}
                first={i === 0}
                last={i === 1}
                controls={controls}
                custom={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
