import "./Hamburger.scss";
import hamburger from "../assets/hamburger.svg";
import closeHamburger from "../assets/closeHamburger.svg";

interface HamburgerMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hamburger = ({ isOpen, setIsOpen }: HamburgerMenuProps) => {
  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <button
      className="hamburger"
      aria-label={isOpen ? "close menu" : "open menu"}
      onClick={handleClick}
    >
      {isOpen ? (
        <img src={closeHamburger} alt="close menu" />
      ) : (
        <img src={hamburger} alt="open menu" />
      )}
    </button>
  );
};

export default Hamburger;
