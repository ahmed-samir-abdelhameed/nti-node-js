const https = require("https")
const addReq = (url, cb) => {
  const req = https.request(url, (res) => {
    let result = ""
    res.on("data", (x) => (result += x.toString()))
    res.on("end", () => cb(JSON.parse(result), false))
  })
  req.on("error", (err) => cb(false, err))
  req.end()
}

module.exports = { addReq }