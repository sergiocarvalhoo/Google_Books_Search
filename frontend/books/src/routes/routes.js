import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Login from "../pages/login";
import Search from "../pages/search";
import BookDetail from "../pages/bookdetail";

function RequireAuth({ children, redirectTo }) {
  const userToken = localStorage.getItem("token");

  if (userToken) {
    return children;
  } else {
    return <Navigate to={redirectTo} />;
  }
}

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route
          path="/booksearch"
          exact
          element={
            <RequireAuth redirectTo="/">
              <Search />
            </RequireAuth>
          }
        />
        <Route
          path="/bookdetail"
          exact
          element={
            <RequireAuth redirectTo="/">
              <BookDetail />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
