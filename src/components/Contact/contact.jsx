import React from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3tw9g3n", "template_h3ajdrq", form.current, {
        publicKey: "",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div className="contact">
        <h1 className="contactTitle"> Contact Me</h1>
        <span className="contactDes">
          Please fill out the details below to contact for work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Please enter your name here"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
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
