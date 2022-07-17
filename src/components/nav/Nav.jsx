import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("home");
  const getClassName = (id) => {
    if (id === activeNav) return "active";
    return "";
  };
  const updateActiveNav = (id) => {
    setActiveNav(id);
  };
  return (
    <nav>
      <a
        href="#"
        className={getClassName("home")}
        onClick={() => updateActiveNav("home")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={getClassName("about")}
        onClick={() => updateActiveNav("about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={getClassName("experience")}
        onClick={() => updateActiveNav("experience")}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={getClassName("services")}
        onClick={() => updateActiveNav("services")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={getClassName("contact")}
        onClick={() => updateActiveNav("contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
