import React from "react";

const Footer = () => {
  return (
    <div className="w-full mx-auto mt-10 md:mt-20 max-w-screen-md">
      <p className="py-8 text-sm font-light text-center dark:text-white-700 text-black-700">
        <a
          href="https://github.com/ammarhd/my-portfolio"
          target="_blank"
          className="hover:opacity-80 transition-opacity"
          rel="noreferrer"
        >
          Designed & Crafted by Ammar © 2021
        </a>
      </p>
    </div>
  );
};

export default Footer;
