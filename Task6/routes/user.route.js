const router = require("express").Router()
const userController = require("../app/controller/user.controller")
router.get("/", userController.home)
router.get("/addCustomer", userController.addCustomer)
router.get("/addNewCustomer", userController.addNewCustomer)
router.get("/showuser/:id", userController.single)
router.get("/showuser/addtransction/:id", userController.addtransaction)
router.post("/showuser/addtransction/:id/", userController.addtransactionPost)
router.get("/deluser/:id", userController.deleteuser)

module.exports = router
