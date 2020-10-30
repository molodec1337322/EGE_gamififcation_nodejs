const express = require('express');
const db = require("./config/database")
const bodyParser = require('body-parser')

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: "test message" })
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`))