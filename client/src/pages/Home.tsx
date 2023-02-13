import LandingHeader from "../components/LandingHeader";
import LoginButton from "../components/LoginButton";

const Home = () => {
  return (
    <>
      <LandingHeader />
      <main className="login-background">
        <h1>Search Songs by Lyrics</h1>
        <LoginButton />
      </main>
    </>
  );
};

export default Home;
