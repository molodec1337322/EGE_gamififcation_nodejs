const Sequelize = require("sequelize")
const db = require("../config/database")
const User = require("./user")
const Variant = require("./variant")
const Answers_for_task = require("./answers_for_task")


const Answers_for_variant = db.define("Answers_for_variant", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    user_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    variant_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    time_start: {
        type: Sequelize.DATE,
        allowNull: true
    },
    time_end: {
        type: Sequelize.DATE,
        allowNull: true
    }
})

Answers_for_variant.associate = (models) => {
    Answers_for_variant.hasMany(models.Answers_for_task, {as: "Answers_for_task", foreignKey: "id", sourceKey: "answer_id"})
}
Answers_for_variant.associate = (models) => {
    Answers_for_variant.belongsTo(models.User, {as: "User", foreignKey: "id", sourceKey: "user_id"})
}
Answers_for_variant.associate = (models) => {
    Answers_for_variant.belongsTo(models.Variant, {as: "Variant", foreignKey: "id", sourceKey: "variant_id"})
}

module.exports.Answers_for_variant = Answers_for_variant

