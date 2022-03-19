import React, { useState } from "react";
import "./index.css";
import { api } from "../../services/api";
import GoogleLogin, { GoogleLogout } from "react-google-login";

export default function Login() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  const handleLoginFailure = (result) => {
    alert("Unfortunately, login failed, please try again. \n\n" + result);
  };

  const handleLogin = async (googleData) => {
    setToken(JSON.stringify(googleData.tokenId));

    const { profileObj } = googleData;

    setUser(JSON.stringify(profileObj));

    console.log(user);

    alert(`User: ${profileObj.name} successfully logged in`);
  };

  const handleLogoutFailure = (result) => {
    alert("Unfortunately, logout failed, please try again. \n\n" + result);
  };

  const handleLogout = (result) => {
    alert("Successfully logged out. \n\n" + result);
  };

  return (
    <div className="bloco-body">
      <div className="bloco-login-google">
        <h1>BooksAPI</h1>
      </div>
      <h1>Login:</h1>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login with Google Account"
        onSuccess={handleLogin}
        onFailure={handleLoginFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
      <h1>Logout:</h1>
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={handleLogout}
        onFailure={handleLogoutFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
