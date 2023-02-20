import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useVerifyAccessToken = () => {
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    const handleCookieChange = () => {
      if (accessToken) {
        navigate("/search");
      }
    };

    const initialCookieValue = Cookies.get("accessToken");
    setAccessToken(initialCookieValue);
    handleCookieChange();

    const intervalId = setInterval(() => {
      const newCookieValue = Cookies.get("accessToken");
      if (newCookieValue !== accessToken) {
        setAccessToken(newCookieValue);
        handleCookieChange();
      }
    }, 1000); // check for cookie changes every second

    return () => {
      clearInterval(intervalId);
    };
  }, [accessToken]);
};

export default useVerifyAccessToken;
