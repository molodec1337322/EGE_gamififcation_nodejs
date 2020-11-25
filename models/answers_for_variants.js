const Sequelize = require("sequelize")
const db = require("../config/database")
const Users = require("./users")
const Variants = require("./variants")
const Answers_for_tasks = require("./answers_for_tasks")


const Answers_for_variants = db.define("Answers_for_variants", {
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

Answers_for_variants.associate = (models) => {
    Answers_for_variants.hasMany(models.Answers_for_tasks, {as: "Answers_for_tasks", foreignKey: "id", sourceKey: "answer_id"})
}
Answers_for_variants.associate = (models) => {
    Answers_for_variants.belongsTo(models.Users, {as: "Users", foreignKey: "id", sourceKey: "user_id"})
}
Answers_for_variants.associate = (models) => {
    Answers_for_variants.belongsTo(models.Variants, {as: "Variants", foreignKey: "id", sourceKey: "variant_id"})
}

module.exports.Answers_for_variants = Answers_for_variants

