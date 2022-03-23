require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require('../src/database/db.config');

const port = process.env.PORT; 

const booksRouter = require("./routes/books");
const commentsRouter = require("./routes/comments");

const app = express();

// config sequelize
db.sync();

app.use(cors());
app.use(express.json())
app.use(booksRouter);
app.use(commentsRouter);

app.listen(port, () => {
  console.log(`Books API listening on: http://localhost:${port}`);
});

module.exports = app;
