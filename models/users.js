const Sequelize = require("sequelize")
const db = require("../config/database")
const Comments_for_tasks = require("./comments_for_task")
const Feedback = require("./feedback")
const Answers_for_variants = require("./answers_for_variants")
const Theory_user_info = require("./theory_user_info")
const Theory_comments = require("./theory_comments")

const Users = db.define("Users", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    nickname:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    info: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

Users.associate = (models) => {
    Users.hasMany(models.Comments_for_tasks, {as: "Comments_for_tasks", foreignKey: "id", sourceKey: "user_id"})
}
Users.associate = (models) => {
    Users.hasMany(models.Feedback, {as: "Feedback", foreignKey: "id", sourceKey: "user_id"})
}
Users.associate = (models) => {
    Users.hasMany(models.Feedback, {as: "Feedback", foreignKey: "id", sourceKey: "user_id"})
}
Theory.associate = (models) => {
    Theory.hasMany(models.Theory_user_info, {as: "Theory_user_info", foreignKey: "id", sourceKey: "user_id"})
}
Theory.associate = (models) => {
    Theory.hasMany(models.Theory_comments, {as: "Theory_comments", foreignKey: "id", sourceKey: "user_id"})
}

module.exports.Users = Users
