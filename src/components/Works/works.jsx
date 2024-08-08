import React from "react";
import "./works.css";
import portfolio1 from "../../assets/portfolio-1.png";
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-3.png";
import portfolio4 from "../../assets/portfolio-4.png";
import portfolio5 from "../../assets/portfolio-5.png";
import portfolio6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id="woRks">
      <h2 className="worksTitle"> My Portfolio</h2>
      <span className="workDes">
        Explore a curated collection of my projects to see my skills in action.
      </span>
      <div className="workImgs">
        <img src={portfolio1} alt="port1" className="workImg" />
        <img src={portfolio2} alt="port2" className="workImg" />
        <img src={portfolio3} alt="port3" className="workImg" />
        <img src={portfolio4} alt="port4" className="workImg" />
        <img src={portfolio5} alt="port5" className="workImg" />
        <img src={portfolio6} alt="port6" className="workImg" />
      </div>
      <button className="workBtn"> See more </button>
    </section>
  );
};

export default Works;
