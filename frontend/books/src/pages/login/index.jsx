import React from "react";
import "./index.css";
import { GoogleLogin } from "react-google-login";

function Login() {
  const handleLoginFailure = (result) => {
    alert("Unfortunately, login failed, please try again. \n\n" + result);
  };

  const handleLogin = async (googleData) => {
    const { profileObj, tokenObj } = googleData;

    localStorage.setItem("user", JSON.stringify(profileObj));
    localStorage.setItem("token", JSON.stringify(tokenObj.access_token));

    alert(`User: ${profileObj.name} successfully logged in`);

    window.location.href = "/booksearch";
  };

  return (
    <div className="bloco-body">
      <div className="bloco-login-google">
        <h1>Welcome to the book search app.</h1>
        <h4>Login:</h4>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login with Google Account"
          onSuccess={handleLogin}
          onFailure={handleLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </div>

    </div>
  );
}

export default Login;
