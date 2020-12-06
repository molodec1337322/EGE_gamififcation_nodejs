const Sequelize = require("sequelize")
const db = require("../config/database")
const Task = require("./task")
const Variant = require("./variant")

const Tasks_variant = db.define("Tasks_variant", {
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
    variant_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Tasks_variant.associate = (models) => {
    Tasks_variant.belongsTo(models.Variant, {as: "Variant", foreignKey: "id", sourceKey: "variant_id"})
}
Tasks_variant.associate = (models) => {
    Tasks_variant.belongsTo(models.Task, {as: "Task", foreignKey: "id", sourceKey: "task_id"})
}

module.exports.Tasks_variant = Tasks_variant
