const router = require("express").Router()

const {init, register, login} = require("../controllers/auth")


router.post("/api/auth/register", register)
router.post("/api/auth/login", login)

router.get("/api/auth/init", init)

module.exports = router