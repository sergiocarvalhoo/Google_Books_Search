var express = require("express");
var router = express.Router();

//  GET Books page.
router.get("/books", (req, res) => {
  res.send("Book search endpoint...");
});

module.exports = router;
