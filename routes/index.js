const express = require("express");

const router = express.Router();

// get index page
router.get("/", (req, res) => {
    res.render("", {title: "Home" });
});

module.exports = router;