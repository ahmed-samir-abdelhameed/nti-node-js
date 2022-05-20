const router = require("express").Router()
const userController = require("../app/controller/user.controller")
router.get("/", userController.home)
router.get("/addCustomer", userController.addCustomer)
router.get("/addNewCustomer", userController.addNewCustomer)
router.get("/showuser/:id", userController.single)
router.get("/showuser/addtransaction/:id", userController.addtransaction)
router.post("/showuser/addtransaction/:id/", userController.addtransactionPost)

module.exports = router
