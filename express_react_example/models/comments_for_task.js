const Sequelize = require("sequelize")
const db = require("../config/database")
const {User} = require("./user")

const Comments_for_task = db.define("Comments_for_task", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    task_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    comment_text:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

User.hasMany(Comments_for_task, {foreignKey: "id", sourceKey: "user_id"})
Comments_for_task.belongsTo(User, {foreignKey: "id", sourceKey: "user_id"})

module.exports.Comments_for_task = Comments_for_task