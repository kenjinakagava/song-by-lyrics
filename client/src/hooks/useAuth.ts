import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const useAuth = (code: string) => {
  const [refreshToken, setRefreshToken] = useState("");
  const [expiresIn, setExpiresIn] = useState(3600);
  useEffect(() => {
    axios
      .post("http://localhost:3000/login", {
        code,
      })
      .then((res) => {
        Cookies.set("accessToken", res.data.accessToken, { expires: 1 / 24 });
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        // hide code in the url path
        window.history.pushState({}, "", "/");
      })
      .catch((err: any) => {
        console.log(code);
        console.log(err);
        console.log(code);
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
            Cookies.set("accessToken", res.data.accessToken, {
              expires: 1 / 24,
            });
            setExpiresIn(res.data.expiresIn);
            console.log("token refreshed");
          })
          .catch((err) => {
            console.log(err);
            console.log("error with refresh api call");
          });
      }, (expiresIn - 60) * 1000);
      return () => clearInterval(interval);
    }
  }, [refreshToken, expiresIn]);
};

export default useAuth;
