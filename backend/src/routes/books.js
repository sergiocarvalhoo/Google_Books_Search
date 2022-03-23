const express = require("express");
const router = express.Router();

const { searchBooks } = require("../controllers/booksController");

router.post("/search", searchBooks);

module.exports = router;
