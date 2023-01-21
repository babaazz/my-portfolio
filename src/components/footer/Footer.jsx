import React from "react";
import "./footer.css";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">
        Sunil
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#Testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a href="https://linkedin.com">
          <GrLinkedinOption />
        </a>
        <a href="https://github.com">
          <BsGithub />
        </a>
        <a href="https://instagram.com">
          <GrInstagram />
        </a>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </div>
      <div className="copyright">
        <small>&copy; Sunil Chauhan. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
