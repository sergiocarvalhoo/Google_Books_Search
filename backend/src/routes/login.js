var express = require("express");
var router = express.Router();

//  GET Login page.
router.get("/login", (req, res) => {
  res.send("Login endpoint...");
});

module.exports = router;
