const app = require("./app/server")
const PORT = process.env.port || 3000
app.listen(PORT, () => {console.log(`localHost:${PORT}`)})
