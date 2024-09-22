import React from "react";
import "./intro.css";
import bg from "../../assets/Img1.png";

const Intro = () => {
  return (
    <section id="introd">
      <div className="introContent">
        <span className="Hello">Hello,</span>
        <span className="introText">
          I am <span className="introName">Sanchit</span>
          <br />
          Software Developer
        </span>
        <p className="introPara">
          I am a skilled software developer with proficiency in problem solving
          skills <br />
          and an enthusiastic website developer
        </p>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
