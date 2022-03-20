import React from "react";
import "./index.css";
import { GoogleLogout } from "react-google-login";

const userStorage = localStorage.getItem("user");
const userIsLogged = localStorage.getItem("logged");

function BookDetail() {
  const handleLogoutFailure = (result) => {
    alert("Unfortunately, logout failed, please try again. \n\n" + result);
  };

  const handleLogout = (result) => {
    localStorage.removeItem("user");
    localStorage.removeItem("logged");

    alert("Successfully logged out.");

    window.location.href = "/";
  };

  return (
    <div className="bloco-detalhes">
      <h1>BooksAPI</h1>
      <a href="/booksearch">Voltar a busca</a>
      <div className="bloco-info-img">
        <div className="bloco-img">
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div className="bloco-info">
          <h3>Nome do Livro</h3>
          <h4>Snopse</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            debitis hic ab neque expedita? Fuga, quisquam corporis porro
            distinctio voluptate eveniet! Laudantium sed laboriosam doloremque
            sint cum facilis in quisquam.
          </p>
          <h4>Comentário</h4>
          <textarea></textarea>
          <button>Comentar</button>

          <div className="bloco-comentario">
            <p>
              <b>10/02/2022 - JHONNY DOE.</b>o melhor livro do mundo, li e vou
              ler mais e mais
            </p>
            <p>
              <b>10/03/2022 - JHONNY DOE.</b>o melhor livro do mundo
            </p>
            <p>
              <b>10/05/2022 - JHONNY DOE.</b>o melhor livro do mundo
            </p>
            <p>
              <b>10/08/2022 - JHONNY DOE.</b>o melhor livro do mundo
            </p>
          </div>
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
  );
}

export default BookDetail;
