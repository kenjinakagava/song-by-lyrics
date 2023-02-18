import axios from "axios";

interface tracksFromPlaylistProps {}

const getUserPlaylists = (accessToken: string) => {
  // get user playlists
  axios
    .get("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
    // get the url of each playlist
    .then((res) =>
      res.data.items.map((item: any) =>
        axios
          .get(item.tracks.href, {
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          })
          // get the name of each track on each playlist
          .then((res) =>
            console.log(
              res.data.items.map((songData: any) => songData.track.name),

              res.data.items.map(
                (songData: any) => songData.track.external_urls.spotify
              ),

              res.data.items.map((songData: any) => songData.track.preview_url)
            )
          )
      )
    );
};

export default getUserPlaylists;
