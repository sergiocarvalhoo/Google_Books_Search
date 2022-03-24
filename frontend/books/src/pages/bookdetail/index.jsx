import React, { useEffect, useState } from "react";
import "./index.css";
import { GoogleLogout } from "react-google-login";
import { api } from "../../services/api";
import { Comment } from "../../components/Comment";

function BookDetail() {

  const user = JSON.parse(localStorage.getItem("user"));
  const user_id = localStorage.getItem("user_id");

  const bookStorage = localStorage.getItem("book");
  const book = JSON.parse(bookStorage);

  const [comments, setComments] = useState([]);
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

  async function handleCreateComment (e) {
    e.preventDefault();

    try {
      const response = await api.post("/comment", {
        user_id: user_id,
        author: user.name,
        book_id: book.id,
        comment: comment,
      });

      const { message } = response.data;

      setComment('');

      if (message) {
        alert(message);
      } 

    } catch (err) {
      alert(err);
    }
  }

  async function handleListCommnets () {

    try {

      const response = await api.get(`/comment/${book.id}`);
      const { comment, message } = response.data;

      if (!message) {
        setComments(comment);
      } else {
        alert(message);
      }

    } catch (err) {

      alert(err.message);

    }

  }

  async function handleDeleteComment (comment_id) {

    try {

      const response = await api.delete(`/comment/${comment_id}`);
      const { message } = response.data;
  
      if (message !== "Comment successfully deleted!") {
        alert(message);
      }

      window.location.href = '/bookdetail'

    } catch (err) {
      alert(err);
    }

  }

  useEffect(() => {
    handleListCommnets()
  }, [comment])
  

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
              value={comment}
              placeholder="Enter your comment:"
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit">Comment</button>
          </form>

          <div className="bloco-comentario">
           {
             comments.map((comment, index) => (

              <Comment 
                key={index}
                author={comment.author}
                book_id={comment.book_id}
                comment_id={comment.id}
                mensagem={comment.comment}
                user_id={comment.user_id}
                deleteComment={handleDeleteComment}
                userLogged={parseInt(user_id)} //Usuário logado
              />

             ))
           }
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
