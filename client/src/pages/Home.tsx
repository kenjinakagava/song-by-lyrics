import LandingHeader from "../components/LandingHeader";
import LoginButton from "../components/LoginButton";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import useVerifyAccessToken from "../hooks/useVerifyAccessToken";
import useAuth from "../hooks/useAuth";
const Home = () => {
  const navigate = useNavigate();
  useAuth();
  useVerifyAccessToken();

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
