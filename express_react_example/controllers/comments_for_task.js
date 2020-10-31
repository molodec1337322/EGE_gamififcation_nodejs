const express = require("express")
const {Comments_for_task} = require("../models/comments_for_task")
const {User} = require("../models/user")


/**
 * 
 * @param {JSON} req 
 * @param {JSON} res 
 */
module.exports.getAllComments = function(req, res){
    Comments_for_task.findAll().then(comments => {
        res.json({
            comments: comments
        })
    })
}

/**Мне лень это все делать сейчас
 * сделаю потом
 * 
 * @param {JSON} req 
 * @param {JSON} res 
 */
module.exports.setComment = function(req, res){
    Comments_for_task.create({
        task_id: req.body.task_id,
        user_id: req.body.user_id,
        comment_text: req.body.comment_text
    })
}