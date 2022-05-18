const dealWithData = require("../helper/dealWithData.helper")
const dealWithِِAdd = require("../helper/dealWithAdd.helper")
const home = (req, res) => {
  const dataUrl = "https://jsonplaceholder.typicode.com/albums"
  dealWithِData.dataReq(dataUrl, (resData, err) => {
    if (resData) {
      res.render("home", { pageTitle: "HOME-User", resData })
    } else {
      console.log("error" + err.message)
      console.log(err)
    }
  })
}
const add = (req, res) => {
  res.render("add", { pageTitle: "Add-User" })
}
const single = (req, res) => {
  let id = req.params.id;
  const addUrl = `https://jsonplaceholder.typicode.com/albums/${id}`
  dealWithِِAdd.apiReq(addUrl, (user, err) => {
    if (user) {
      console.log(user)
      res.render("single", { pageTitle: "Single-User", user })
    } else {
      console.log("error " + err.message)
      console.log(err)
    }
  })
}
module.exports = {
  home,add,single
}
