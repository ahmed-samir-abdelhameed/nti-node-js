const router = require("express").Router()
const userController = require("../app/controller/user.controller")
router.get("/", userController.home)
router.get("/albums/:id", userController.single)
router.get("/add", userController.add)

module.exports = router
