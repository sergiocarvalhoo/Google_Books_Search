import React from "react"
import "./index.css"

function Search() {
    return (
      <div className="bloco-body">
      <div className="bloco-login-google">
        <h1>BooksAPI</h1>
        <input type="text" placeholder="Insira o nome do livro" />
         
         <div className="bloco-mostra-livros"> 
             <div></div>
            
         </div>

      </div>
    </div>
    );
  }
  
  export default Search;