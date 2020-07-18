const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.write("server is up and running");
  console.log("server is up and running");
});

module.exports = router;
