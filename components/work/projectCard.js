import clsx from "clsx";
import MediaIcon from "../mediaIcon";
import { motion } from "framer-motion";
import useHover from "../../lib/useHover";
import React from "react";

const ProjectCard = ({
  title,
  subtitle,
  description,
  externalLink,
  githubLink,
  technologies,
  imageLink,
  rightShift,
  controls,
  custom,
}) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <motion.div
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
      custom={custom}
    >
      <div className="relative mb-10 md:mb-20  bg-cover md:mt-20 mt-14 z-1">
        <div className="px-6 py-6 md:p-0">
          <div id="titles" className={clsx(rightShift && "md:text-right")}>
            <a
              href={externalLink}
              className="text-xl font-bold md:text-2xl dark:text-white-900 text-black-900"
              target="_blank"
              rel="noreferrer"
            >
              {title}
            </a>
            <p className="text-base font-medium md:text-xl dark:text-white-700 text-black-700">
              {subtitle}
            </p>
          </div>
          <p
            className={clsx(
              "font-light md:px-4 md:py-6 my-8 md:w-1/2 sm:w-4/5 pr-2 text-base md:rounded-md md:shadow-xl text-black-700 md:bg-lightTheme md:dark:bg-darkTheme dark:text-white-700",
              rightShift && "md:ml-auto md:text-right"
            )}
          >
            {description}
          </p>
          <div
            className={clsx(
              "flex md:mb-4 mb-2",
              rightShift && "md:justify-end"
            )}
          >
            {technologies.map((tech, i) => (
              <p
                className={clsx(
                  "text-base dark:text-white-700 text-black-700",
                  i !== technologies.length - 1 && "mr-5 md:mr-8"
                )}
                key={tech}
              >
                {tech}
              </p>
            ))}
          </div>
          <div
            className={clsx(
              "flex items-center space-x-4",
              rightShift && "md:justify-end"
            )}
          >
            <MediaIcon icon="github" href={githubLink} size={25} />
            <MediaIcon icon="external" href={externalLink} size={25} />
          </div>
        </div>
        <div id="mdscreen" className="hidden md:block">
          <motion.div
            className={clsx(
              "absolute md:right-0 md:w-7/12 md:-top-6 top-0 h-full rounded-lg",
              rightShift && "md:left-0 "
            )}
            style={{ zIndex: -1 }}
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: -5,
              },
            }}
            animate={isHovered ? "hovered" : "initial"}
            initial="initial"
          >
            <img
              className="object-cover w-full h-full rounded-lg opacity-30 md:h-auto dark:opacity-40 md:opacity-100 md:dark:opacity-80"
              src={imageLink}
              alt={title}
              style={{
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
              }}
            />
          </motion.div>
        </div>
        <div id="smscreen" className=" md:hidden">
          <motion.div
            className={clsx(
              "absolute md:right-0 md:w-7/12 md:-top-6 inset-0 top-0 h-full rounded-lg",
              rightShift && "md:left-0 "
            )}
            style={{ zIndex: -1 }}
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: -5,
              },
            }}
            animate={isHovered ? "hovered" : "initial"}
            initial="initial"
          >
            <img
              className="object-cover w-full h-full rounded-lg opacity-30 md:h-auto dark:opacity-40 md:opacity-100 md:dark:opacity-80"
              src={imageLink}
              alt={title}
              style={{
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
              }}
            />
          </motion.div>
        </div>

        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a
          ref={hoverRef}
          target="_blank"
          className={clsx(
            "absolute top-0 h-full rounded-lg md:right-0 md:w-7/12 hidden md:block",
            rightShift && "md:left-0"
          )}
          href={externalLink}
          rel="noreferrer"
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
