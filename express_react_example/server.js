const express = require('express');
const db = require("./config/database")
const bodyParser = require('body-parser')
const passport = require("passport")


const authRoute = require("./routes/auth")
const commentsForTaskRoute = require("./routes/comments_for_task")

const port = process.env.PORT || 5000

const app = express()


db.authenticate()
    .then(() => console.log("db connected!"))
    .catch(err => console.log("db connection failed!"))

/*
db.sync({force: true}).then(result=>{
    console.log(result);
    console.log("\n\n\nSynchronized!!!")
    })
.catch(err=> console.log(err));
*/
app.use(passport.initialize())
require("./middleware/passport")(passport)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/auth", authRoute)
app.use("/commentsForTasks", commentsForTaskRoute)

app.get('/*', (req, res) => {
  res.status(404).json({ 
    express: "test message" 
  })
})

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`))