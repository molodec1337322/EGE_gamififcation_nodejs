const Sequelize = require("sequelize")
const db = require("../config/database")
const Subject = require("./subject")
const Theory = require("./theory")

const Theory_topic = db.define("Theory_topic", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    topic_name:{
        type: Sequelize.STRING,
        allowNull: true
    },
    subject_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Theory_topic.associate = (models) => {
    Theory_topic.belongsTo(models.Subject, {as: "Subject", foreignKey: "id", sourceKey: "subject_id"})
}
Theory_topic.associate = (models) => {
    Theory_topic.hasMany(models.Theory, {as: "Theory", foreignKey: "id", sourceKey: "topic_id"})
}

module.exports.Theory_topic = Theory_topic
