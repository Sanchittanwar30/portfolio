import React from "react";
import "./works.css";
import portfolio1 from "../../assets/portfolio-1.png";
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-3.png";
import portfolio4 from "../../assets/portfolio-4.png";
import portfolio5 from "../../assets/portfolio-5.png";
import portfolio6 from "../../assets/portfolio-6.png";

const Works = () => {
  const projects = [
    { img: portfolio1, link: "https://github.com/Sanchittanwar30/Chatapp" },
    { img: portfolio2, link: "https://github.com/Sanchittanwar30/blog-app" },
    {
      img: portfolio3,
      link: "https://github.com/Sanchittanwar30/Internet-Banking-vf",
    },
    {
      img: portfolio4,
      link: "https://github.com/Sanchittanwar30/Social-Media",
    },
    {
      img: portfolio5,
      link: "https://github.com/Sanchittanwar30/world-currency-converter",
    },
    {
      img: portfolio6,
      link: "https://github.com/Sanchittanwar30/football-league",
    },
  ];

  return (
    <section id="woRks">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="workDes">
        Explore a curated collection of my projects to see my skills in action.
        Please click on the images to explore my projects.
      </span>
      <div className="workImgs">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project.img}
              alt={`port${index + 1}`}
              className="workImg"
            />
          </a>
        ))}
      </div>
      <button className="workBtn">See more</button>
    </section>
  );
};

export default Works;
