import { set } from "idb-keyval";
import { SongList } from "../interfaces/songsInterface";

const setDatabase = ({ songs }: SongList) => {
  console.log(songs);
  set("song-data", songs);
};

export default setDatabase;
