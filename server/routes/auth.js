const router = require("express").Router()

const {init, register, login} = require("../controllers/auth")

router.get("/api/auth/init", init)
router.post("/api/auth/register", register)
router.post("/api/auth/login", login)

module.exports = router