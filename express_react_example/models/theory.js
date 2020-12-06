const Sequelize = require("sequelize")
const db = require("../config/database")
const Pictures_for_theory = require("./pictures_for_theory")
const Theory_topic = require("./theory_topic")
const Theory_user_info = require("./theory_user_info")
const Theory_comment = require("./theory_comment")

const Theory = db.define("Theory", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    theory_text:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    topic_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Theory.associate = (models) => {
    Theory.hasMany(models.Pictures_for_theory, {as: "Pictures_for_theory", foreignKey: "id", sourceKey: "theory_id"})
}
Theory.associate = (models) => {
    Theory.hasMany(models.Theory_user_info, {as: "Theory_user_info", foreignKey: "id", sourceKey: "theory_id"})
}
Theory.associate = (models) => {
    Theory.hasMany(models.Theory_comment, {as: "Theory_comment", foreignKey: "id", sourceKey: "theory_id"})
}
Theory.associate = (models) => {
    Theory.belongsTo(models.Theory, {as: "Theory", foreignKey: "id", sourceKey: "topic_id"})
}

module.exports.Theory = Theory
