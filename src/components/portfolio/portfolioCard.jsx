import React from "react";
import "./portfolio.css";

const PortfolioCard = ({ img, title, gitHubLink, liveDemoLink }) => {
  return (
    <article id="portfolio-card" className="portfolio-item">
      <div className="portfolio-item-img">
        <img src={img} alt="portfolio" />
      </div>
      <h3>{title}</h3>
      <div className="portfolio-cta">
        <a href={gitHubLink} className="btn">
          Github
        </a>
        <a href={liveDemoLink} className="btn btn-primary">
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default PortfolioCard;
