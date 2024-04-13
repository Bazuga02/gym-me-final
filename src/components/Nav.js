import React from "react";

import { nav } from "../data";

const Nav = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden lg:flex">
      <ul className="flex text-white  gap-x-8 ">
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <a
                className=" hover:text-primary-200 transition   "
                href={`#${item.scrollId}`}
                onClick={() => scrollToSection(item.scrollId)}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
