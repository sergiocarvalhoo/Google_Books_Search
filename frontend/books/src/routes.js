import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login";
import Search from "./pages/search";
import BookDetail from "./pages/bookdetail";

function Rotas(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact  element={<Login />} />
                <Route path="/booksearch" exact  element={<Search />} />
                <Route path="/bookdetail" exact  element={<BookDetail />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Rotas;