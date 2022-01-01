import React, { useState, useEffect, useCallback } from "react";
import Logo from "./logo";

import { IoLogoGithub } from "react-icons/io5";
import { HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "next-themes";

import { AnimatePresence, motion } from "framer-motion";

import clsx from "clsx";
import { useHeaderVisible } from "./useHeaderVisible";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const visible = useHeaderVisible();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme == "system" ? systemTheme : theme;

    if (currentTheme == "dark") {
      //playOnDark();
      return (
        <HiSun
          className="w-6 h-6"
          role="button"
          onClick={() => setTheme("light")}
        ></HiSun>
      );
    } else {
      //playOnLight();
      return (
        <HiMoon
          className="w-6 h-6"
          role="button"
          onClick={() => setTheme("dark")}
        ></HiMoon>
      );
    }
  };

  return (
    <>
      <div
        id="theOuter"
        className={clsx(
          "fixed z-20 w-full opacity-90 bg-lightTheme dark:bg-darkTheme transition-top duration-300",
          visible ? "top-0" : "-top-28"
        )}
      >
        <div
          id="content"
          className="mx-auto max-w-screen-md  px-1 md:px-0 py-5 font-sans flex justify-between items-center text-black-900 dark:text-white-900 "
        >
          <div id="name" className="flex justify-start">
            <Logo />
          </div>

          <div
            id="rightSide"
            className="flex justify-end items-center space-x-5"
          >
            <div id="github">
              <a href="https://github.com/ammarhd" target="_blank">
                <div className="flex justify-start items-center space-x-1 font-semibold">
                  <IoLogoGithub />
                  <span>Source</span>
                </div>
              </a>
            </div>
            <div
              id="toggle"
              className="flex justify-center items-center p-2 dark:bg-gray-700 rounded-lg bg-blue-500"
            >
              <AnimatePresence exitBeforeEnter initial={false}>
                <motion.div
                  style={{ display: "inline-block" }}
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {renderThemeChanger()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
