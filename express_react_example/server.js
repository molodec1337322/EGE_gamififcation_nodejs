const express = require('express');
const db = require("./config/database")
const bodyParser = require('body-parser')


const commentsForTaskRoutes = require("./routes/comments_for_task")

const port = process.env.PORT || 5000;

const app = express();

db.authenticate()
    .then(() => console.log("db connected!"))
    .catch(err => console.log("db connection failed!"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/commentsForTasks", commentsForTaskRoutes)

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: "test message" })
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`))