import "./LandingHeader.scss";
import logo from "../assets/logo.svg";
import LandingNav from "./LandingNav";

const LandingHeader = () => {
  return (
    <header className="landing-header">
      <a href="/" className="landing-header__logo--link">
        <img
          src={logo}
          alt="go to the start of the page"
          className="landing-header__logo"
        />
      </a>
      <LandingNav />
    </header>
  );
};

export default LandingHeader;
