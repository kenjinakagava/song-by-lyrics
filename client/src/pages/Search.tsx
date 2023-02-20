import Cookies from "js-cookie";
import { get } from "idb-keyval";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import useAuth from "../hooks/useAuth";
import { Song, SongList } from "../interfaces/songsInterface";
import MusicPlayerContainer from "../features/musicPlayer/musicPlayerContainer";
import saveSongData from "../utils/saveSongData";
import { Howl } from "howler";

const code = new URLSearchParams(window.location.search).get("code");

const hasSongData = async () => {
  try {
    const data = await get("song-data");
    return data;
  } catch (error) {
    console.log(`error getting song-data from indexedDB: ${error}`);
  }
};

const Search = () => {
  const [isPlaying, setIsPlaying] = useState("");

  const newSong = new Howl({
    src: [""],
    html5: true,
    onend: () => {
      setIsPlaying("");
    },
  });
  const [song, setSong] = useState<Howl>(newSong);

  const [songs, setSongs] = useState<SongList>();
  const songsArray = {
    songs: [
      {
        name: "",
        preview_url: "",
        spotify_url: "",
      },
    ],
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
      // getUserPlaylists(accessToken);
      hasSongData()
        .then((res) => res.map((res: Song) => songsArray.songs.push(res)))
        .then(() => setSongs(songsArray));
    }
    if (!accessToken) {
      navigate("/require-login");
    }
  }, [accessToken]);

  console.log(songs);
  return (
    <>
      <Header />
      <main>
        <SearchBar placeholder="Type lyrics" />
        <ul className="songs-list">
          {/*
          songs?.songs.map((song) => (
            <li key={song.name}>
              <MusicPlayerContainer
                name={song.name}
                preview_url={song.preview_url}
                spotify_url={song.spotify_url}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
              />
            </li>
          ))
          */}
          <MusicPlayerContainer
            name={"test"}
            preview_url={
              "https://p.scdn.co/mp3-preview/71cd4711268a4a499f8fe5fa58ee822f81a5ecd3?cid=9a7244f22bd947d99728102b23515cbd"
            }
            spotify_url={"song.spotify_url"}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            song={song}
            setSong={setSong}
          />
          <MusicPlayerContainer
            name={"test2"}
            preview_url={
              "https://p.scdn.co/mp3-preview/28ba11d070c7020230a7abf6a71367abe9a904fb?cid=9a7244f22bd947d99728102b23515cbd"
            }
            spotify_url={"song.spotify_url"}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            song={song}
            setSong={setSong}
          />
        </ul>
      </main>
    </>
  );
};

export default Search;
