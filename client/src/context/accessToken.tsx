import React, { createContext, useContext, useState } from "react";

interface contextProps {
  children: React.ReactNode;
}

interface accessTokenContextProps {
  accessToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
}

export const accessTokenContext = createContext<accessTokenContextProps>({
  accessToken: "",
  setAccessToken: () => {},
});

export const AccessTokenProvider = ({ children }: contextProps) => {
  const [accessToken, setAccessToken] = useState("");

  return (
    <accessTokenContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </accessTokenContext.Provider>
  );
};

// Create a child component that uses the context
export const ChildComponent = () => {
  const { accessToken, setAccessToken } = useContext(accessTokenContext);

  const handleClick = () => {
    setAccessToken("new accessToken");
  };

  return (
    <div>
      <p>accessToken: {accessToken}</p>
      <button onClick={handleClick}>Update AccessToken</button>
    </div>
  );
};
