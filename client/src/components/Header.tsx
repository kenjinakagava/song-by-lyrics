import logo from "../assets/logo.svg";
import "./Header.scss";
import Nav from "./Nav";

const navItems = ["Search", "Search by Album"];

const Header = () => {
  return (
    <header className="header">
      <a className="header__logo">
        <img src={logo} alt="go to homepage" />
      </a>
      <Nav navItems={navItems} />
    </header>
  );
};

export default Header;
