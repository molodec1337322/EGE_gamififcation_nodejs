const Sequelize = require("sequelize")
const db = require("../config/database")
const Users = require("./users")
const Tasks = require("./tasks")

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

Comments_for_task.associate = (models) => {
    Comments_for_task.belongsTo(models.Users, {as: "Users", foreignKey: "id", sourceKey: "user_id"})
}
Comments_for_task.associate = (models) => {
    Comments_for_task.belongsTo(models.Tasks, {as: "Tasks", foreignKey: "id", sourceKey: "task_id"})
}

module.exports.Comments_for_task = Comments_for_task
