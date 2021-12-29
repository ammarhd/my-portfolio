import React, { useState, useEffect, useCallback } from "react";
import Logo from "./logo";
import { Link } from "react-scroll";
import { IoLogoGithub } from "react-icons/io5";
import { HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "next-themes";
import useSound from "use-sound";
import { AnimatePresence, motion } from "framer-motion";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [playOnDark] = useSound("/sounds/dark-on.mp3");
  const [playOnLight] = useSound("/sounds/light-on.mp3");
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme == "system" ? systemTheme : theme;

    if (currentTheme == "dark") {
      playOnDark();
      return (
        <HiSun
          className="w-6 h-6"
          role="button"
          onClick={() => setTheme("light")}
        ></HiSun>
      );
    } else {
      playOnLight();
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
        className="flex justify-center items-center w-full z-10 bg-gray-100 bg-opacity-20 dark:bg-gray-900 shadow-md  px-3 py-5 "
      >
        <div
          id="content"
          className="w-full md:w-2/3 xl:w-1/2 flex justify-between items-center text-gray-900 dark:text-gray-200 "
        >
          <div id="leftSide" className="flex justify-start space-x-10">
            <div id="name" className="flex justify-start pl-4 pr-5">
              <Logo />
            </div>
            <div id="sectionsBgScreen" className="hidden md:block">
              <div id="sections" className="flex justify-start space-x-2  ">
                <div id="pageLinks">
                  <Link
                    activeClass="Home"
                    to="about"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    activeClass="Home"
                    to="about"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Work
                  </Link>
                </div>
                <div id="github">
                  <a href="https://github.com/ammarhd">
                    <div className="flex justify-start items-center space-x-1">
                      <IoLogoGithub />
                      <span>Source</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="rightSide" className="flex justify-end space-x-3">
            <div
              id="toggle"
              className="flex justify-center items-center p-2 dark:bg-gray-500 rounded-lg bg-violet-400"
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
            <div id="mobileMenu" className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
            >
              <Link
                href="/home"
                activeClass="home"
                to="home"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                activeClass="about"
                to="about"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Link>

              <Link
                href="/work"
                activeClass="work"
                to="work"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </Link>
              <Link
                href="/services"
                activeClass="services"
                to="services"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </Link>

              <Link
                href="/contact"
                activeClass="work"
                to="work"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default Navbar;
