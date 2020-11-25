const Sequelize = require("sequelize")
const db = require("../config/database")
const Pictures_to_theory = require("./pictures_to_theory")
const Theory_topics = require("./theory_topics")
const Theory_user_info = require("./theory_user_info")
const Theory_comments = require("./theory_comments")

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
    Theory.hasMany(models.Pictures_to_theory, {as: "Pictures_to_theory", foreignKey: "id", sourceKey: "theory_id"})
}
Theory.associate = (models) => {
    Theory.hasMany(models.Theory_user_info, {as: "Theory_user_info", foreignKey: "id", sourceKey: "theory_id"})
}
Theory.associate = (models) => {
    Theory.hasMany(models.Theory_comments, {as: "Theory_comments", foreignKey: "id", sourceKey: "theory_id"})
}
Theory.associate = (models) => {
    Theory.belongsTo(models.Theory, {as: "Theory", foreignKey: "id", sourceKey: "topic_id"})
}

module.exports.Theory = Theory
