const router = require("express").Router()

const {init, register, login, initAdmin, loginAdmin} = require("../controllers/auth")


router.post("/api/auth/register", register)
router.post("/api/auth/login", login)
router.post("/api/auth/admin/login", loginAdmin)

router.get("/api/auth/init", init)
router.get("/api/auth/admin/init", initAdmin)

module.exports = router