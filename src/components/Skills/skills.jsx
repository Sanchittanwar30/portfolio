import React from "react";
import "./skills.css";
import uidesgin from "../../assets/ui-design.png";
import webdesign from "../../assets/website-design.png";
import appdesign from "../../assets/app-design.png";
import luffy1 from "../../assets/luffy1.png";

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
            <h2>Problem Solving</h2>
            <p>
              "Specializing in solving complex data structure and algorithm
              challenges with the precision and efficiency of a competitive
              programmer"
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={webdesign} alt="Webdesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>
              "Passionate web developer specializing in building responsive,
              user-friendly applications, real-time chat solutions, and solving
              complex challenges through innovative coding and efficient
              algorithms"
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={appdesign} alt="Appdesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>API Development & Integration</h2>
            <p>
              Experienced in building and integrating RESTful APIs to ensure
              seamless communication between front-end and back-end systems.
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={luffy1} alt="Appdesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Sportsperson and Anime Enthusiast</h2>
            <p>
              Passionate about staying active and engaging in sports, teamwork,
              and resilience and enjoys watching anime, drawing inspiration from
              creative storytelling and character development to fuel my
              imagination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
