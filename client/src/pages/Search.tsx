import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import useAuth from "../hooks/useAuth";
import getUserPlaylists from "../utils/getUserPlaylists";

const code = new URLSearchParams(window.location.search).get("code");

const Search = () => {
  const navigate = useNavigate();

  const accessToken = Cookies.get("accessToken");
  // if there is no token and the code is truthy
  useAuth(code ? code : "");

  useEffect(() => {
    if (accessToken !== undefined) {
      getUserPlaylists(accessToken);
    }
    if (!accessToken && !code) {
      navigate("/require-login");
    }
  }, []);

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
