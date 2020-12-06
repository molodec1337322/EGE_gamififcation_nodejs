const Sequelize = require("sequelize")
const db = require("../config/database")
const Task = require("./task")

const Picture_for_task = db.define("Picture_for_task", {
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
    picture_url:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Picture_for_task.associate = (models) => {
    Picture_for_task.belongsTo(models.Task, {as: "Task", foreignKey: "id", sourceKey: "task_id"})
}

module.exports.Picture_for_task = Picture_for_task
