import LoginButton from "../components/LoginButton";

const RequireLogin = () => {
  return (
    <main>
      <p>You need to be logged in to see this page</p>
      <LoginButton />
    </main>
  );
};

export default RequireLogin;
