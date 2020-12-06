const Sequelize = require("sequelize")
const db = require("../config/database")
const Comments_for_task = require("./comments_for_task")
const Feedback = require("./feedback")
const Answers_for_variant = require("./answers_for_variant")
const Theory_user_info = require("./theory_user_info")
const Theory_comment = require("./theory_comment")

const User = db.define("User", {
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

User.associate = (models) => {
    User.hasMany(models.Comments_for_task, {as: "Comments_for_task", foreignKey: "id", sourceKey: "user_id"})
}
User.associate = (models) => {
    User.hasMany(models.Feedback, {as: "Feedback", foreignKey: "id", sourceKey: "user_id"})
}
User.associate = (models) => {
    User.hasMany(models.Feedback, {as: "Feedback", foreignKey: "id", sourceKey: "user_id"})
}
Theory.associate = (models) => {
    Theory.hasMany(models.Theory_user_info, {as: "Theory_user_info", foreignKey: "id", sourceKey: "user_id"})
}
Theory.associate = (models) => {
    Theory.hasMany(models.Theory_comment, {as: "Theory_comment", foreignKey: "id", sourceKey: "user_id"})
}

module.exports.User = User
