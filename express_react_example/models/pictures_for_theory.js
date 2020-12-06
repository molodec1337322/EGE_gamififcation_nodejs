const Sequelize = require("sequelize")
const db = require("../config/database")
const Theory = require("./theory")

const Pictures_for_theory = db.define("Pictures_for_theory", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    picture_url:{
        type: Sequelize.STRING,
        allowNull: true
    },
    theory_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Pictures_for_theory.associate = (models) => {
    Pictures_for_theory.belongsTo(models.Theory, {as: "Theory", foreignKey: "id", sourceKey: "subject_id"})
}

module.exports.Pictures_for_theory = Pictures_for_theory
