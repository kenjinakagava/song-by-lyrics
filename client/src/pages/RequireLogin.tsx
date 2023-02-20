import LoginButton from "../components/LoginButton";
import useAuth from "../hooks/useAuth";
import useVerifyAccessToken from "../hooks/useVerifyAccessToken";

const RequireLogin = () => {
  // use Refresh Token to generate new access Token
  useAuth();
  // Verify Access Token and Redirect if found
  useVerifyAccessToken();

  return (
    <main>
      <p>You need to be logged in to see this page</p>
      <LoginButton />
    </main>
  );
};

export default RequireLogin;
