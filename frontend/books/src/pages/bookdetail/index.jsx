import React, { useEffect, useState } from "react";
import "./index.css";
import { GoogleLogout } from "react-google-login";
import { api } from "../../services/api";

function BookDetail() {
  const user = JSON.parse(localStorage.getItem("user"));
  const user_id = localStorage.getItem("user_id");

  const bookStorage = localStorage.getItem("book");
  const book = JSON.parse(bookStorage);

  const [comment, setComment] = useState("");

  const handleLogoutFailure = (result) => {
    alert("Unfortunately, logout failed, please try again. \n\n" + result);
  };

  const handleLogout = (result) => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    alert("Successfully logged out.");

    window.location.href = "/";
  };

  async function handleCreateComment(e) {
    e.preventDefault();

    try {
      const response = await api.post("/comment", {
        user_id: user_id,
        book_id: book.id,
        comment: comment,
      });
      alert("Comment successfully added!!")
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="bloco-detalhes">
      <h1>BooksAPI</h1>
      <a href="/booksearch">Voltar a busca</a>
      <div className="bloco-info-img">
        <div className="bloco-img">
          <img src={book.capa} alt="" />
        </div>
        <div className="bloco-info">
          <h3>{book.titulo}</h3>
          <h4>Autor: {book.autores}</h4>
          <h4>Editora: {book.editora}</h4>
          <h4>Data de lançamento: {book.dataLancamento}</h4>
          <h4>{book.qtdPaginas} páginas</h4>
          <h4>Catégoria: {book.categoria}</h4>
          <h4>Descrição</h4>
          <p>{book.descricao}</p>
          <h4>Comentário</h4>

          <form onSubmit={handleCreateComment}>
            <textarea
              type="text"
              placeholder="Enter your comment:"
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit">Comment</button>
          </form>

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
      <h3>You are logged in as: {user.givenName}</h3>
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
