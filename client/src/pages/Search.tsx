import Cookies from "js-cookie";
import { get } from "idb-keyval";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import useAuth from "../hooks/useAuth";
import saveSongData from "../utils/saveSongData";
import getUserPlaylists from "../utils/getUserPlaylists";

const code = new URLSearchParams(window.location.search).get("code");

const hasSongData = async () => {
  await get("song-data").then((val) => console.log(val));
};

const Search = () => {
  const accessToken = Cookies.get("accessToken");
  const navigate = useNavigate();

  if (accessToken !== undefined) {
    //saveSongData(accessToken);
  }

  // if there is no token and the code is truthy
  useAuth(code ? code : "");

  useEffect(() => {
    if (accessToken !== undefined) {
      // getUserPlaylists(accessToken);
      hasSongData();
    }
    if (!accessToken) {
      navigate("/require-login");
    }
  }, [accessToken]);

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
