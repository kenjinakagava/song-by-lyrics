import { accessTokenContext } from "../context/accessToken";
import { useContext } from "react";

const SearchByAlbum = () => {
  const { accessToken, setAccessToken } = useContext(accessTokenContext);
  console.log(accessToken);
  return (
    <div>
      I WANT TO DIEEEEEE
      <button onClick={() => console.log(accessToken)}>AHAHAHAHAHH</button>
    </div>
  );
};

export default SearchByAlbum;
