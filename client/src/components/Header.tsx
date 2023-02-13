import logo from "../assets/logo.svg";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="go to homepage" />
      <Nav />
    </header>
  );
};

export default Header;
