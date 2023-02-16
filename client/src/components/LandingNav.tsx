import "./Nav.scss";
import Hamburger from "./Hamburger";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavProps {
  navItems: Array<string>;
  // if we have an access token then the user is logged in
  accessToken?: string;
}

const loginUrl = import.meta.env.VITE_AUTH_URL;
const logoutUrl = "https://www.spotify.com/us/logout/";

const LandingNav = ({ navItems, accessToken }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="landingNav">
      <ul className={isOpen ? "landingNav__list--active" : "landingNav__list"}>
        {navItems.map((item) => (
          <li className="landingNav__list__item" key={item}>
            <Link to={`#${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
        <li className="landingNav__list__item">
          <a href={accessToken ? logoutUrl : loginUrl}>
            {accessToken ? "Log out" : "Log in"}
          </a>
        </li>
      </ul>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default LandingNav;
