const Sequelize = require("sequelize")
const db = require("../config/database")
const Task = require("./task")
const Answers_for_variant = require("./answers_for_variant")

const Answers_for_task = db.define("Answers_for_task", {
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
    answer_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    local_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    answer:{
        type: Sequelize.STRING,
        allowNull: true
    },
    task_grade:{
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

Answers_for_task.associate = (models) => {
    Answers_for_task.belongsTo(models.Answers_for_variant, {as: "Answers_for_variant", foreignKey: "id", sourceKey: "answer_id"})
}
Answers_for_task.associate = (models) => {
    Answers_for_task.belongsTo(models.Task, {as: "Task", foreignKey: "id", sourceKey: "task_id"})
}

module.exports.Answers_for_task = Answers_for_task
