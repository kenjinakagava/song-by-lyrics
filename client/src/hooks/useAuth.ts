import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const useAuth = (code: string) => {
  const [refreshToken, setRefreshToken] = useState(Cookies.get("refreshToken"));
  useEffect(() => {
    if (!Cookies.get("accessToken")) {
      axios
        .post("http://localhost:3000/login", {
          code,
        })
        .then((res) => {
          Cookies.set("accessToken", res.data.accessToken, {
            expires: 1 / 24,
          });
          Cookies.set("refreshToken", res.data.refreshToken, {
            expires: 1 / 25,
          });
          setRefreshToken(res.data.refreshToken);
          // hide code in the url path
          window.history.pushState({}, "", "/");
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  }, [code]);
  useEffect(() => {
    if (refreshToken !== undefined) {
      console.log(`refresh token: ${refreshToken}`);
      axios
        .post("http://localhost:3000/refresh", {
          refreshToken: refreshToken,
        })
        .then((res) => {
          Cookies.set("accessToken", res.data.accessToken, {
            expires: 1 / 24,
          });
          console.log("token refreshed");
        })
        .catch((err) => {
          console.log(err);
          console.log("error with refresh api call");
        });
    }
  }, [refreshToken]);
};

export default useAuth;
