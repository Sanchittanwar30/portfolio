import React from "react";
import "./skills.css";
import uidesgin from "../../assets/ui-design.png";
import webdesign from "../../assets/website-design.png";
import appdesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do </span>
      <span className="skillDescription">
        I am a skilled software developer with passion in problem-solving and
        algorithm design. My proficiency in creating efficient and scalable
        solutions is complemented by a deep understanding of web development
        principles.
      </span>
      <div className="skillBars">
        <div className="skillbar">
          <img src={uidesgin} alt="UIdesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Demo testing.</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={webdesign} alt="Webdesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p> Demo Testing</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={appdesign} alt="Appdesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p> Demo Testinf</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
