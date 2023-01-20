import React from "react";
import "./portfolio.css";
import PortfolioCard from "./portfolioCard";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {images.map((img, idx) => (
          <PortfolioCard
            img={img}
            title={`Project ${idx + 1}`}
            key={idx}
            gitHubLink={"github.com"}
            liveDemoLink={"livedemo.com"}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
