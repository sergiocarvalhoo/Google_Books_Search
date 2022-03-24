const axios = require("axios");
const db = require("../database/db.config");
const Comment = db.comment;

//  Create
exports.createComment = async (req, res) => {
  const { user_id, author, book_id, comment } = req.body;

  console.log({
    user_id, author, book_id, comment
  })

  try {
    await Comment.create(req.body);
    res.status(201).json(req.body);
  } catch (err) {
    res.json({ message: err.message });
  }
};

//  Read
exports.listComments = async (req, res) => {
  console.log(req.body);

  try {
    const comment = await Comment.findAll({
      where: {
        book_id: req.params.bookId,
      },
    });
    res.status(200).json({ comment: comment });
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Delete
exports.deleteComment = async (req, res) => {
  try {
    await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Comment successfully deleted!" });
  } catch (err) {
    res.send({ message: err.message });
  }
};
