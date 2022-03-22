import React from "react";
import "./index.css";
import { GoogleLogout } from "react-google-login";

const userStorage = localStorage.getItem("user");
const userIsLogged = localStorage.getItem("logged");

function Search() {
  const handleLogoutFailure = (result) => {
    alert("Unfortunately, logout failed, please try again. \n\n" + result);
  };

  const handleLogout = (result) => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    alert("Successfully logged out.");

    window.location.href = "/";
  };

  return (
    <div className="bloco-body">
      <div className="bloco-login-google">
        <h1>BooksAPI</h1>
        <input type="text" placeholder="Insira o nome do livro" />
        <button>Pesquisar</button>

        <div className="bloco-mostra-livros">
          <div>
            <img src="https://picsum.photos/80/110" />
            <p> Nome do filme aqui</p>
          </div>
          <div>
            <img src="https://picsum.photos/80/110" />
            <p> Nome do filme aqui</p>
          </div>
        </div>
        <h1>Logout:</h1>
        <GoogleLogout
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={handleLogout}
          onFailure={handleLogoutFailure}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
}

export default Search;
