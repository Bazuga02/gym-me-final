import React from "react";
import iconsocial from "../assets/iconsocial.png";
import facebook from "../assets/Logo_de_Facebook.png";
import x from "../assets/xx.jpg";
import whatsapp from "../assets/whatsapp.jpg";

import { footer } from "../data";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
  integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;

const Footer = () => {
  const { logo, copyrightText } = footer;
  return (
    <footer className=" bg-neutral-500  h-[125px] md:h-[195px] px-[20px] ">
      <div
        className="container mx-auto h-full flex justify-between items-center md:items-end md:pb-[50px] "
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* logo */}
        <a href="oola">
          <img src={logo} alt="" />
        </a>

        <div className=" flex gap-4 cursor-pointer  ">
          <img src={facebook} className="   h-9 rounded-lg " alt="" />
          <img src={iconsocial} className="   h-9 rounded-lg " alt="" />
          <img src={x} className="   h-9 rounded-lg " alt="" />
          <img src={whatsapp} className="   h-9 rounded-lg " alt="" />
        </div>

        {/* //copyright */}
        <p className=" text-neutral-300 text-sm "> {copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
