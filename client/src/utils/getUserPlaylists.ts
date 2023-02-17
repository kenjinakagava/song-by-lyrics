import axios from "axios";

const getUserPlaylists = (accessToken: string) => {
  axios
    .get("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
    .then((res) => console.log(res.data.items));
};

export default getUserPlaylists;
