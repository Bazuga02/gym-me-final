import React, { useState, useEffect } from "react";
import { header } from "../data";
import { useNavigate } from "react-router-dom";

import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";

import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Header = ({ showLogin }) => {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  //scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  const { logo, btnLoginText, btnSignupText } = header;

  return (
    <header className=" bg-neutral-500 py-[16px] , fixed max-w-[1440px] z-30 left-0 right-0  mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300 ">
      {/* logo */}
      <a href="/">
        <img className=" h-[40px] " src={logo} alt="" />
        {/* <img className=" h-[70px]  rounded-md " src={LOGO} alt="" /> */}
      </a>
      {/* nav initially hidden */}
      <Nav />
      {/* button initial hidden */}
      <div className="hidden lg:flex space-x-4">
        <button
          onClick={() => navigate("/login")}
          className=" btn btn-sm text-white hover:text-primary-200 transition"
        >
          {btnLoginText}
        </button>
        <button
          className=" btn btn-sm btn-primary  "
          onClick={() => navigate("/signup")}
        >
          {btnSignupText}
        </button>
      </div>
      {/* navmenu button hidden */}
      <div
        onClick={() => setNavMobile(!navMobile)}
        className=" lg:hidden absolute right-4  "
      >
        {navMobile ? (
          <RiCloseFill className=" text-primary-200 text-3xl cursor-pointer" />
        ) : (
          <RiMenu4Fill className=" text-primary-200 text-3xl cursor-pointer " />
        )}
      </div>
      {/* nav mobile hide on desk */}
      <NavMobile navMobile={navMobile} />
    </header>
  );
};

export default Header;
