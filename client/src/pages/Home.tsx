import LandingHeader from "../components/LandingHeader";
import LoginButton from "../components/LoginButton";
import { accessTokenContext, ChildComponent } from "../context/accessToken";
import { useContext } from "react";
import "./Home.scss";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import useAuth from "../hooks/useAuth";

interface HomeProps {
  code: string;
}

const Home = ({ code }: HomeProps) => {
  const { accessToken, setAccessToken } = useContext(accessTokenContext);
  const token = useAuth(code);
  console.log(token);
  console.log(accessToken);
  return (
    <>
      {accessToken === "" ? (
        <>
          <LandingHeader />
          <main className="login-background">
            <h1>The fastest way to find that song stuck in your head</h1>
            <h2>Search Songs by Lyrics</h2>
            <LoginButton />
            <ChildComponent />
          </main>
        </>
      ) : (
        <>
          <Header />
          <main>
            <SearchBar placeholder="Type lyrics" />
            <div>{accessToken}</div>
          </main>
        </>
      )}
    </>
  );
};

export default Home;
