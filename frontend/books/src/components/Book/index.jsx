
import React from 'react';


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
               <img src={capa} alt="Capa do Livro" />
            </div>
            <div>   
                <p>{categoria}</p>
                <h2>{titulo}</h2>
                <h4>{autores.map(author => author)} - {dataLancamento}</h4>
                <p>{editora}</p>
                <p>{qtdPaginas} páginas</p>
            </div>
        </div>

    );

}