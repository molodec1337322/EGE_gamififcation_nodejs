const Sequelize = require("sequelize")
const db = require("../config/database")
const Pictures_for_task = require("./pictures_for_task")
const Comments_for_task = require("./comments_for_task")
const Task_variant = require("./task_variant")
const Answers_for_task = require("./answers_for_task")
const Types_of_task = require("./type_of_task")

const Task = db.define("Task", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    type_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    task_text:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    solve_text:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    short_answer_text:{
        type: Sequelize.TEXT,
        allowNull: true
    }
})

Task.associate = (models) => {
    Task.hasMany(models.Comments_for_task, {as: "Comments_for_task", foreignKey: "id", sourceKey: "task_id"})
}
Task.associate = (models) => {
    Task.hasMany(models.Pictures_for_task, {as: "Pictures_for_task", foreignKey: "id", sourceKey: "task_id"})
}
Task.associate = (models) => {
    Task.hasMany(models.Answers_for_task, {as: "Answers_for_task", foreignKey: "id", sourceKey: "task_id"})
}
Task.associate = (models) => {
    Task.hasMany(models.Task_variant, {as: "Task_variant", foreignKey: "id", sourceKey: "task_id"})
}
Task.associate = (models) => {
    Task.belongsTo(models.Types_of_task, {as: "Types_of_task", foreignKey: "id", sourceKey: "type_id"})
}

module.exports.Task = Task
