const Sequelize = require("sequelize")
const db = require("../config/database")
const Tasks_variants = require("./tasks_variants")
const Answers_for_variants = require("./answers_for_variants")

const Variants = db.define("Variants", {
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

Variants.associate = (models) => {
    Variants.hasMany(models.Tasks_variants, {as: "Tasks_variants", foreignKey: "id", sourceKey: "variant_id"})
}
Variants.associate = (models) => {
    Variants.hasMany(models.Answers_for_variants, {as: "Answers_for_variants", foreignKey: "id", sourceKey: "variant_id"})
}

module.exports.Variants = Variants
