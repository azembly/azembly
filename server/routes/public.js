const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/assets", express.static(path.join(__dirname, "../../", "client/public/dist")))
router.use("/admin-assets", express.static(path.join(__dirname, "../../", "client/admin/dist")))
router.get("/admin", (req, res) => {
    res.render("admin")
})

router.get("/admin/*", (req, res) => {
    res.render("admin")
})
router.get("/", (req, res) => {
    res.render("public")
})

router.get("*", (req, res) => {
    res.render("public")
})

module.exports = router;