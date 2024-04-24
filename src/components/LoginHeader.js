import React from "react";
import { useNavigate } from "react-router-dom";
import logoimg from "../assets/img/header/logo.svg";

const LoginHeader = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <header className="bg-neutral-500 py-4 px-6 flex justify-between items-center">
      <img src={logoimg} className="h-10 lg:block hidden mr-4" alt="Logo" />
      <h1 className="text-white text-2xl lg:text-3xl font-bold drop-shadow-[3px_3px_var(--tw-shadow-color)] tracking-wide shadow-primary-200">
        LOGIN PAGE
      </h1>

      <button
        className="btn btn-primary btn-lg font-semibold px-4 py-2 truncate"
        onClick={handleHomeClick}
      >
        Back To Home Page
      </button>
    </header>
  );
};

export default LoginHeader;
