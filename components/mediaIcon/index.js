import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const MediaIcon = ({ icon, href, size }) => {
  return (
    <motion.a href={href} target="_blank" whileHover="hover" initial="initial">
      <motion.div
        variants={{
          initial: {
            rotate: 0,
            scale: 1,
          },
          hover: {
            rotate: 10,
            scale: 1.2,
          },
        }}
        className="text-black-900 dark:text-white-900 "
      >
        {icon == "github" ? (
          <FaGithub size={size} />
        ) : icon == "linkedin" ? (
          <FaLinkedin size={size} />
        ) : icon == "twitter" ? (
          <FaTwitter size={size} />
        ) : icon == "external" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 stroke-current stroke-black-900 dark:stroke-white-900"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13.5 10.5L21 3M16 3h5v5M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5"
            ></path>
          </svg>
        ) : (
          <></>
        )}
      </motion.div>
    </motion.a>
  );
};

export default MediaIcon;
