const Sequelize = require("sequelize")
const db = require("../config/database")
const Tasks = require("./tasks")

const Picture_to_tasks = db.define("Picture_to_tasks", {
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

Picture_to_tasks.associate = (models) => {
    Picture_to_tasks.belongsTo(models.Tasks, {as: "Tasks", foreignKey: "id", sourceKey: "task_id"})
}

module.exports.Picture_to_tasks = Picture_to_tasks
