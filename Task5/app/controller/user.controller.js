const dealWithData = require("../helper/dealWithData.helper")
const home = (req, res) => {
  var data = dealWithData.readFromJson("database/customer.json")
  var show = data.length
  res.render("home", { pageTitle: "HOME", data, show })
}
const addCustomer = (req, res) => {
  res.render("addCustomer", { pageTitle: "Customer-User" })
}
const addNewCustomer = (req, res) => {
  const user = { id: Date.now(), ...req.query, transaction: [] }
  const data = dealWithData.readFromJson("database/customer.json")
  data.push(user)
  dealWithData.writetoJson(data, "database/customer.json")
  res.redirect("/")
}
const findUser = (id) => {
  var data = dealWithData.readFromJson("database/Customer.json")
  var user = data.find((user) => user.id == id)
  return user
}
const single = (req, res) => {
  var showrtans = 0
  var id = req.params.id
  var user = findUser(id)
  if (user) showrtans = user.transaction.length
  res.render("single", { pageTitle: "Single-User", user, showrtans })
}
const addtransaction = (req, res) => {
  var id = req.params.id
  var user = findUser(id)
  res.render("addtransaction", { pageTitle: "Single-User", user })
}
const addtransactionPost = (req, res) => {
  var id = req.params.id
  var teans = { ...req.body }
  var data = dealWithData.readFromJson("database/Customer.json")
  var user = data.find((user) => user.id == id)
  user.transaction.push(teans)
  console.log(user)
  dealWithData.writetoJson(data, "database/Customer.json")
  res.redirect("/")
}

module.exports = { home, addCustomer, addNewCustomer, single, addtransaction, addtransactionPost,}
