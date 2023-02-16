import { useContext, useEffect, useState } from "react";
import { accessTokenContext } from "../context/accessToken";
import axios from "axios";

const useAuth = (code: string) => {
  const { accessToken, setAccessToken } = useContext(accessTokenContext);
  const [refreshToken, setRefreshToken] = useState("");
  const [expiresIn, setExpiresIn] = useState(3600);
  useEffect(() => {
    axios
      .post("http://localhost:3000/login", {
        code,
      })
      .then((res) => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        window.history.pushState({}, "", "/");
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [code]);

  useEffect(() => {
    // prevent error where the api is called without a valid refresh token in initial render
    if (refreshToken !== "" && refreshToken !== undefined) {
      const interval = setInterval(() => {
        axios
          .post("http://localhost:3000/refresh", {
            refreshToken: refreshToken,
          })
          .then((res) => {
            setAccessToken(res.data.accessToken);
            setExpiresIn(res.data.expiresIn);
          })
          .catch((err) => {
            console.log(err);
            console.log("error with refresh api call");
          });
      }, (expiresIn - 60) * 1000);
      return () => clearInterval(interval);
    }
  }, [refreshToken, expiresIn]);

  return accessToken;
};

export default useAuth;
