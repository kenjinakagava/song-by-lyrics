import { set } from "idb-keyval";

interface Song {
  name: string;
  preview_url: string;
  spotify_url: string;
}

export interface SongList {
  songs: Song[];
}

const setDatabase = ({ songs }: SongList) => {
  console.log(songs);
  set("song-data", songs);
};

export default setDatabase;
