import React from "react";
import iconsocial from "../assets/iconsocial.png";
import facebook from "../assets/Logo_de_Facebook.png";
import x from "../assets/xx.jpg";
import whatsapp from "../assets/whatsapp.jpg";

import { footer } from "../data";

const Footer = () => {
  const { logo, copyrightText } = footer;

  return (
    <footer className="bg-neutral-500 h-[100px] md:h-[155px] px-[20px]">
      <div className="container mx-auto h-full flex flex-col md:flex-row justify-between items-center md:items-end md:pb-[50px]">
        {/* Logo */}
        <a href="oola">
          <img src={logo} alt="" />
        </a>

        {/* Icons */}
        <div className="flex gap-4 cursor-pointer md:mt-0 mt-4">
          <img src={facebook} className="h-9 rounded-lg" alt="" />
          <img src={iconsocial} className="h-9 rounded-lg" alt="" />
          <img src={x} className="h-9 rounded-lg " alt="" />
          <img src={whatsapp} className="h-9 rounded-lg" alt="" />
        </div>

        {/* Copyright */}
        <p className="text-neutral-300 text-sm mt-4 md:mt-0">{copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
