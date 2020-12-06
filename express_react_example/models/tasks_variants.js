const Sequelize = require("sequelize")
const db = require("../config/database")
const Tasks = require("./tasks")
const Variants = require("./variants")

const Tasks_variants = db.define("Tasks_variants", {
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

Tasks_variants.associate = (models) => {
    Tasks_variants.belongsTo(models.Variants, {as: "Variants", foreignKey: "id", sourceKey: "variant_id"})
}
Tasks_variants.associate = (models) => {
    Tasks_variants.belongsTo(models.Tasks, {as: "Tasks", foreignKey: "id", sourceKey: "task_id"})
}

module.exports.Tasks_variants = Tasks_variants
