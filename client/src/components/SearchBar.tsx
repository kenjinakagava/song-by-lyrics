import "./SearchBar.scss";
import search from "../assets/search.svg";
import Fuse from "fuse.js";

interface SearchBarProps {
  placeholder?: string;
  minLength?: number;
}

const SearchBar = ({ placeholder, minLength }: SearchBarProps) => {
  return (
    <div className="search">
      <div className="search__inputs">
        <input
          className="search__input"
          type="text"
          placeholder={placeholder}
          minLength={minLength}
        />
        <button
          className="search__icon-container"
          onClick={() => console.log("test")}
        >
          <img
            className="search__icon"
            src={search}
            aria-hidden="true"
            alt="magnifying glass icon"
          />
        </button>
      </div>
      <div className=""></div>
    </div>
  );
};

export default SearchBar;
