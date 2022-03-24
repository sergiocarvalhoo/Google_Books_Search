import React, { useState } from "react";
import "./index.css";
import { GoogleLogout } from "react-google-login";
import { api } from "../../services/api";
import { Book } from "../../components/Book";

function Search() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [bookTitle, setBookTitle] = useState("");
  const [books, setBooks] = useState([]);


  const handleLogoutFailure = (result) => {
    alert("Unfortunately, logout failed, please try again. \n\n" + result);
  };

  const handleLogout = (result) => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    alert("Successfully logged out.");

    window.location.href = "/";
  };

  async function handleSearchBook(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const response = await api.post("/search", {
        bookTitle,
        token: JSON.parse(token),
      });
      const { items } = response.data;

      setBooks(items);
    } catch (err) {
      alert(err);
    }
  }

  const handleRenderAutor = (autores) => {
    return autores ? autores : ["Não Informado"];
  };

  const handleImageLink = (imageLinks) => {
    return imageLinks
      ? imageLinks.thumbnail
      : "https://gabrielchalita.com.br/wp-content/uploads/2019/12/semcapa.png";
  };

  const handleRenderTitle = (title) => {
    return title ? title : "";
  };

  return (
    <div className="bloco-body-seach">
      <div className="bloco-login-google-seach">
        <h1>Pesquisa de Livros</h1>
        <form onSubmit={handleSearchBook}>
          <input
            type="text"
            placeholder="Digite o nome do livro :"
            onChange={(e) => setBookTitle(e.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </form>

        <div className="bloco-mostra-livros">
          {books.map((book, index) => (
            <Book
              key={index}
              id={book.id}
              capa={handleImageLink(book.volumeInfo.imageLinks)}
              autores={handleRenderAutor(book.volumeInfo.authors)}
              categoria={book.volumeInfo.categories}
              dataLancamento={book.volumeInfo.publishedDate}
              editora={book.volumeInfo.publisher}
              titulo={handleRenderTitle(book.volumeInfo.title)}
              qtdPaginas={book.volumeInfo.pageCount}
              descricao={book.volumeInfo.description}
            />
          ))}
        </div>
        <h3>Olá, {user.givenName} !</h3>
        <GoogleLogout
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Sair"
          onLogoutSuccess={handleLogout}
          onFailure={handleLogoutFailure}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
}

export default Search;
