import "./LandingHeader.scss";
import logo from "../assets/logo.svg";
import LandingNav from "./LandingNav";

const navItems = ["Features", "Reviews", "Contact"];

const LandingHeader = () => {
  return (
    <header className="landing-header">
      <div className="left-wrapper">
        <a href="/" className="landing-header__logo--link">
          <img
            src={logo}
            alt="go to the start of the page"
            className="landing-header__logo"
          />
        </a>
        <LandingNav navItems={navItems} />
      </div>
    </header>
  );
};

export default LandingHeader;
