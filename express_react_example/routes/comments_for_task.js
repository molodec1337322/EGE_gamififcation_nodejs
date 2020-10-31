const express = require("express")
const router = express.Router()
const controllers = require("../controllers/comments_for_task")

router.get("/getAll", controllers.getAllComments)

router.post("/add", controllers.setComment)

module.express = router