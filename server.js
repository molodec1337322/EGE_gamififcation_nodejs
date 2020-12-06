const express = require("express")
const { env } = require("process")
const app = express()

const host = "http://localhost:"
const port = process.env.port || 5435

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.listen(port)
console.log("server started at: " + host + port)
