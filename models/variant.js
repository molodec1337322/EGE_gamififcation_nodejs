const Sequelize = require("sequelize")
const db = require("../config/database")
const Tasks_variant = require("./task_variant")
const Answers_for_variant = require("./answers_for_variant")

const Variant = db.define("Variant", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    type_of_variant:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Variant.associate = (models) => {
    Variant.hasMany(models.Tasks_variant, {as: "Tasks_variant", foreignKey: "id", sourceKey: "variant_id"})
}
Variant.associate = (models) => {
    Variant.hasMany(models.Answers_for_variant, {as: "Answers_for_variant", foreignKey: "id", sourceKey: "variant_id"})
}

module.exports.Variant = Variant
