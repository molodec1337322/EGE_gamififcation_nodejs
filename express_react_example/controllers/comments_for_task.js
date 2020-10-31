const express = require("express")
const jwt_decode = require('jwt-decode')
const {Comments_for_task} = require("../models/comments_for_task")
const {User} = require("../models/user")


/**
 * 
 * @param {JSON} req 
 * @param {JSON} res 
 */
module.exports.getAllComments = function(req, res){
    Comments_for_task.findAll()
    .then(comments => {
        res.json({
            comments: comments
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            message: "server error"
        })
    })
}

/**
 * 
 * @param {JSON} req {"task_id": 5, "comment_text": "dfgsggfgsdfhgh"}
 * @param {JSON} res 
 */
module.exports.setComment = function(req, res){
    const decodedToken = jwt_decode(req.headers.authorization.split(" ")[1])

    User.findByPk(decodedToken.id)
    .then(user => {
        Comments_for_task.create({
            task_id: req.body.task_id,
            user_id: user.id,
            comment_text: req.body.comment_text
        })
        res.status(201).json({
            message: "comment created"
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            message: "server error"
        })
    })
}