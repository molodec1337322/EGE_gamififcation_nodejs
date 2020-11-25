const Sequelize = require("sequelize")
const db = require("../config/database")
const Theory = require("./theory")

const Pictures_to_theory = db.define("Pictures_to_theory", {
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

Theory_topics.associate = (models) => {
    Theory_topics.belongsTo(models.Theory, {as: "Theory", foreignKey: "id", sourceKey: "subject_id"})
}

module.exports.Pictures_to_theory = Pictures_to_theory
