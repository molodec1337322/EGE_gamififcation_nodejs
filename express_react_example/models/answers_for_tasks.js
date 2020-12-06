const Sequelize = require("sequelize")
const db = require("../config/database")
const Tasks = require("./tasks")
const Answers_for_variants = require("./answers_for_variants")

const Answers_for_tasks = db.define("Answers_for_tasks", {
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

Answers_for_tasks.associate = (models) => {
    Answers_for_tasks.belongsTo(models.Answers_for_variants, {as: "Answers_for_variants", foreignKey: "id", sourceKey: "answer_id"})
}
Answers_for_tasks.associate = (models) => {
    Answers_for_tasks.belongsTo(models.Tasks, {as: "Tasks", foreignKey: "id", sourceKey: "task_id"})
}

module.exports.Answers_for_tasks = Answers_for_tasks
