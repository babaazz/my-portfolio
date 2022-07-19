import React from "react";
import "./header.css";
import CV from "../../assets/cv.pdf";
import Me from "../../assets/me2.png";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello, I'm</h5>
        <h2>Sunil Chauhan</h2>
        <h5 className="text-light">Fullstack Developer</h5>
        <div className="cta">
          <a href={CV} className="btn" download>
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <div className="header-social">
          <a href="https://linkedin.com" target="_blank">
            <BsLinkedin />
          </a>
          <a href="https://github.com" target="_blank">
            <FaGithub />
          </a>
          <a href="https://dribble.com" target="_blank">
            <FiDribbble />
          </a>
        </div>
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
