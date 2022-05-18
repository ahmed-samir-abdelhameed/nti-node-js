require("dotenv").config()
const express = require("express")
const hbs = require("hbs")
const path = require("path")
const app = express()

app.set("view engine", "hbs")

app.use(express.static(path.join(__dirname, "../app/resources/public")))
app.set("views", path.join(__dirname, "../app/resources/views"))
hbs.registerPartials(path.join(__dirname, "../app/resources/layouts"))

const userRoute = require("../routes/user.route")
app.use(userRoute)

module.exports = app
