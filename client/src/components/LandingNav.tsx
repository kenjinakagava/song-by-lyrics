import "./LandingNav.scss";
import hamburger from "../assets/hamburger.svg";
import Hamburger from "./Hamburger";
import { useState } from "react";

const LandingNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="landingNav">
      <ul className={isOpen ? "landingNav__list--active" : "landingNav__list"}>
        <li className="landingNav__list__item">
          <a href="#features">Features</a>
        </li>
        <li className="landingNav__list__item">
          <a href="#reviews">Reviews</a>
        </li>
        <li className="landingNav__list__item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default LandingNav;
