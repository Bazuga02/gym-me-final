import React from "react";
import { nav } from "../data";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const NavMobile = ({ navMobile }) => {
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
    <nav
      className={`${
        navMobile ? "min-h-screen" : "min-h-0"
      } lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0`}
    >
      <ul className="w-full h-full flex flex-col justify-center items-center gap-y-8">
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              {item.path ? (
                <Link
                  className="text-white text-body-md hover:text-primary-200 transition"
                  to={item.path}
                >
                  {item.name}
                </Link>
              ) : (
                <ScrollLink
                  className="text-white text-body-md hover:text-primary-200 transition"
                  to={item.scrollId}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </ScrollLink>
              )}
            </li>
          );
        })}
      </ul>
      {/* buttons */}
      <div className="-mt-44 flex justify-center gap-x-8">
        <Link to="/login" className="btn btn-lg to-white">
          Log In
        </Link>
        <Link to="/signup" className="btn btn-lg btn-primary">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default NavMobile;
