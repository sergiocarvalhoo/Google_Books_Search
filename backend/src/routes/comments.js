const express = require("express");
const router = express.Router();

const { createComment } = require("../controllers/commentsController");
const { listComments } = require("../controllers/commentsController");
const { deleteComment } = require("../controllers/commentsController");

// Create
router.post("/comment", createComment);

//  Read
router.get("/comment/:bookId", listComments);

//  Delete
router.delete("/comment/:id", deleteComment);

module.exports = router;
