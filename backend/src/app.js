require('dotenv').config()
const express = require("express");

const port = process.env.PORT;

const loginRouter = require("./routes/login");
const booksRouter = require("./routes/books");

const app = express();

app.use(loginRouter);
app.use(booksRouter);

app.listen(port, () => {
  console.log(`Books API listening on: http://localhost:${port}/login`);
});

module.exports = app;
