const Sequelize = require("sequelize")
const db = require("../config/database")
const Pictures_to_tasks = require("./pictures_to_tasks")
const Comments_for_tasks = require("./comments_for_tasks")
const Tasks_variants = require("./tasks_variants")
const Answers_for_tasks = require("./answers_for_tasks")
const Types_of_tasks = require("./types_of_tasks")

const Tasks = db.define("Tasks", {
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

Tasks.associate = (models) => {
    Tasks.hasMany(models.Comments_for_tasks, {as: "Comments_for_tasks", foreignKey: "id", sourceKey: "task_id"})
}
Tasks.associate = (models) => {
    Tasks.hasMany(models.Pictures_to_tasks, {as: "Pictures_to_tasks", foreignKey: "id", sourceKey: "task_id"})
}
Tasks.associate = (models) => {
    Tasks.hasMany(models.Answers_for_tasks, {as: "Answers_for_tasks", foreignKey: "id", sourceKey: "task_id"})
}
Tasks.associate = (models) => {
    Tasks.hasMany(models.Tasks_variants, {as: "Tasks_variants", foreignKey: "id", sourceKey: "task_id"})
}
Tasks.associate = (models) => {
    Tasks.belongsTo(models.Types_of_tasks, {as: "Types_of_tasks", foreignKey: "id", sourceKey: "type_id"})
}

module.exports.Tasks = Tasks
