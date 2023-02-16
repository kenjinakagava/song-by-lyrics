import LandingHeader from "../components/LandingHeader";
import LoginButton from "../components/LoginButton";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("accessToken")) {
      navigate("/search");
    }
  }, []);

  return (
    <>
      <LandingHeader />
      <main className="login-background">
        <h1>The fastest way to find that song stuck in your head</h1>
        <h2>Search Songs by Lyrics</h2>
        <LoginButton />
      </main>
    </>
  );
};

export default Home;
