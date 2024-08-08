import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactimg from "../../assets/contact.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="introd"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          {" "}
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          About{" "}
        </Link>
        <Link
          activeClass="active"
          to="woRks"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio{" "}
        </Link>
        <Link
          activeClass="active"
          to="contactPage"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Contact
        </Link>
      </div>
      <button
        className="desktopMenubtn"
        onClick={() => {
          document
            .getElementById("contactPage")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactimg} alt="" className="desktopMenuImg" /> Contact me
      </button>
    </nav>
  );
};

export default Navbar;
