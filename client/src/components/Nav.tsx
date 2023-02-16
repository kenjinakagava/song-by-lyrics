import "./Nav.scss";
import formatLink from "../utils/formatLink";
import Hamburger from "./Hamburger";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

interface NavProps {
  navItems: Array<string>;
}

const loginUrl = import.meta.env.VITE_AUTH_URL;
const logoutUrl = "https://www.spotify.com/us/logout/";

const handleLogout = () => {
  Cookies.remove("accessToken");
};

const Nav = ({ navItems }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const accessToken = Cookies.get("accessToken");

  return (
    <nav className="landingNav">
      <ul className={isOpen ? "landingNav__list--active" : "landingNav__list"}>
        {navItems.map((item) => (
          <li className="landingNav__list__item" key={item}>
            <Link to={`/${formatLink(item)}`}>{item}</Link>
          </li>
        ))}
        <li className="landingNav__list__item">
          <a href={accessToken ? logoutUrl : loginUrl} onClick={handleLogout}>
            {accessToken ? "Log out" : "Log in"}
          </a>
        </li>
      </ul>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Nav;
