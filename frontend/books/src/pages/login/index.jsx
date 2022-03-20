import React from "react";
import "./index.css";
import { GoogleLogin } from "react-google-login";

function Login() {
  const handleLoginFailure = (result) => {
    alert("Unfortunately, login failed, please try again. \n\n" + result);
  };

  const handleLogin = async (googleData) => {
    const { profileObj } = googleData;

    localStorage.setItem("user", JSON.stringify(profileObj));
    localStorage.setItem("logged", true);

    alert(`User: ${profileObj.name} successfully logged in`);

    window.location.href = "/booksearch";
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
    </div>
  );
}

export default Login;
