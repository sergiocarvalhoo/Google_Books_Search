import React from "react"
import "./index.css"

function Search() {
    return (
      <div className="bloco-body">
      <div className="bloco-login-google">
        <h1>BooksAPI</h1>
        <input type="text" placeholder="Insira o nome do livro" />
        <button >Pesquisar</button>
         
         <div className="bloco-mostra-livros"> 
             <div>
               <img src="https://picsum.photos/80/110"/>
               <p> Nome do filme aqui</p>
             </div>
             <div>
               <img src="https://picsum.photos/80/110"/>
               <p> Nome do filme aqui</p>
             </div>
         </div>
      </div>
    </div>
    );
  }
  
  export default Search;