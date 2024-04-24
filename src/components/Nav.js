import React from "react";
import { nav } from "../data";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  return (
    <nav className="hidden lg:flex">
      <ul className="flex text-white gap-x-8 cursor-pointer ">
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              {item.path ? (
                <Link
                  className=" hover:text-primary-200 transition "
                  to={item.path}
                >
                  {item.name}
                </Link>
              ) : (
                <ScrollLink
                  className=" hover:text-primary-200 transition "
                  to={item.scrollId}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  {item.name}
                </ScrollLink>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
