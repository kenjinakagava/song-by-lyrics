import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import useAuth from "../hooks/useAuth";

const code = new URLSearchParams(window.location.search).get("code");

const Search = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!code) {
      navigate("/");
    }
  }, []);

  // if there is no token and the code is truthy
  if (Cookies.get("accessToken") === undefined && code) {
    useAuth(code ? code : "");
  }

  return (
    <>
      <Header />
      <main>
        <SearchBar placeholder="Type lyrics" />
      </main>
    </>
  );
};

export default Search;
