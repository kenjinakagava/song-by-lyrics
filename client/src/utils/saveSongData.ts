import axios from "axios";
import { useState } from "react";
import setDatabase, { SongList } from "../db/setDatabase";

const getUserPlaylists = (accessToken: string) => {
  // get user playlists
  const songList: SongList = {
    songs: [],
  };

  axios
    .get("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
    // get the url of each playlist
    .then((res) =>
      Promise.all(
        res.data.items.map((item: any) =>
          axios
            .get(item.tracks.href, {
              headers: {
                Authorization: "Bearer " + accessToken,
              },
            })
            .then((res) =>
              // get data from each track from each playlist and add them to songDataArray
              res.data.items.map((songData: any) => {
                songList.songs.push({
                  name: songData.track.name,
                  spotify_url: songData.track.external_urls.spotify,
                  preview_url: songData.track.preview_url,
                });
              })
            )
        )
      )
    )
    .then(() => {
      console.log(songList);
      setDatabase(songList);
    });
};

export default getUserPlaylists;
