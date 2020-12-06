const Sequelize = require("sequelize")
const db = require("../config/database")
const Task = require("./task")
const Subject = require("./subject")

const Types_of_task = db.define("Types_of_task", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    subject_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    task_type_name:{
        type: Sequelize.STRING,
        allowNull: true
    }
})

Types_of_task.associate = (models) => {
    Types_of_task.hasMany(models.Task, {as: "Task", foreignKey: "id", sourceKey: "type_id"})
}
Types_of_task.associate = (models) => {
    Types_of_task.belongsTo(models.Subject, {as: "Subject", foreignKey: "id", sourceKey: "subject_id"})
}

module.exports.Types_of_task = Types_of_task
