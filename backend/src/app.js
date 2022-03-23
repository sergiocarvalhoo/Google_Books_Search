require("dotenv").config();
const express = require("express");
const cors = require("cors");

const port = 4000;

const loginRouter = require("./routes/login");
const booksRouter = require("./routes/books");

const app = express();

app.use(cors());
app.use(express.json())
app.use(loginRouter);
app.use(booksRouter);

app.listen(port, () => {
  console.log(`Books API listening on: http://localhost:${port}`);
});

module.exports = app;
