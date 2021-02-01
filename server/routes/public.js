const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/assets", express.static(path.join(__dirname, "../../", "client/dist")))
router.get("/", (req, res) => {
    res.render("public")
})

router.get("*", (req, res) => {
    res.render("public")
})

module.exports = router;