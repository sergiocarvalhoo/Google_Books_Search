
import React from 'react';
import "./Book.module.css"

export const Book = ({id, titulo, autores, descricao, capa, editora, dataLancamento, qtdPaginas, categoria}) => {


    function handleRedirectToBookDetail () {

        const bookDetail = {
            id,
            titulo, 
            descricao,
            autores,
            capa,
            editora,
            dataLancamento,
            qtdPaginas,
            categoria
        }

        localStorage.setItem('book', JSON.stringify(bookDetail));

        window.location.href = '/bookdetail'
    }

    return (

        <div onClick={handleRedirectToBookDetail}>
            <div>
               <img className='capalivro' src={capa} alt="Capa do Livro" />
            </div>
            <div>   
                <h2 className='tituloLivro' >{titulo}</h2>
            </div>
        </div>

    );

}