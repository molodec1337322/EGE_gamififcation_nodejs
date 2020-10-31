const express = require("express")
const router = express.Router()
const controllers = require("../controllers/comments_for_task")
const passport = require("passport")

router.get("/getAll", controllers.getAllComments)

router.post("/add", passport.authenticate('jwt', {session:false}), controllers.setComment)

module.exports = router