const express = require("express")
const path = require("path")
const dotenv = require("dotenv")
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname + '/public/')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(port, () => {
    console.log("----------------------------------------------------------------")
    console.log(`Hey buddy, your server is running at http://localhost:${port}`)
    console.log("----------------------------------------------------------------")

})