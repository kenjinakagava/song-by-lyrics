import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import useAuth from "../hooks/useAuth";
import { Song, SongList } from "../interfaces/songsInterface";
import MusicPlayerContainer from "../features/musicPlayer/musicPlayerContainer";
import saveSongData from "../utils/saveSongData";
import { Howl } from "howler";
import hasSongData from "../utils/hasSongData";
import "./Search.scss";
import ReactPaginate from "react-paginate";

const code = new URLSearchParams(window.location.search).get("code");

const Search = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [isPlaying, setIsPlaying] = useState("");

  const newSong = new Howl({
    src: [""],
    html5: true,
    format: "mp3",
    onend: () => {
      setIsPlaying("");
    },
  });
  const [currentSong, setCurrentSong] = useState<Howl>(newSong);
  const [songs, setSongs] = useState<SongList>();
  let songCount =
    songs?.songs.length !== undefined
      ? Math.ceil(songs.songs.length / itemsPerPage)
      : 0;
  const songsArray: SongList = {
    songs: [],
  };

  const accessToken = Cookies.get("accessToken");
  const navigate = useNavigate();

  if (accessToken !== undefined && !hasSongData()) {
    saveSongData(accessToken);
  }

  // if there is no token and the code is truthy
  useAuth(code ? code : "");

  useEffect(() => {
    if (accessToken !== undefined) {
      hasSongData()
        .then((res) => res.map((res: Song) => songsArray.songs.push(res)))
        .then(() => setSongs(songsArray));
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
        <ul className="songs-list">
          {songs?.songs
            ?.slice(
              0 + itemsPerPage * (currentPage - 1),
              itemsPerPage * currentPage
            )
            .map((song) => (
              <li key={song.name} className="songs-list__item">
                <MusicPlayerContainer
                  name={song.name}
                  preview_url={song.preview_url}
                  spotify_url={song.spotify_url}
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  song={currentSong}
                  setSong={setCurrentSong}
                />
              </li>
            ))}
        </ul>
        <ReactPaginate
          onPageChange={(data) => setCurrentPage(data.selected + 1)}
          pageCount={songCount !== undefined ? songCount : 0}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          activeClassName="pagination__active"
          className="songs-pagination"
        />
      </main>
    </>
  );
};

export default Search;
