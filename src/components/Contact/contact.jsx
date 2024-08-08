import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contactPage">
      <div className="contact">
        <h1 className="contactTitle"> Contact Me</h1>
        <span className="contactDes">
          Please fill out the details below to contact for work opportunities
        </span>
        <form className="contactForm">
          <input
            type="text"
            className="name"
            placeholder="Please enter your name here"
          />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            name="message"
            className="msg"
            rows="5"
            placeholder="Your message"
          ></textarea>
        </form>
      </div>
      <button className="submitBtn" type="submit" value="Send">
        Submit
      </button>
    </section>
  );
};

export default Contact;
