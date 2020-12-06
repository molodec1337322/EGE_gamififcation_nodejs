const Sequelize = require("sequelize")
const db = require("../config/database")
const Types_of_task = require("./type_of_task")
const Theory_topic = require("./theory_topic")

const Subject = db.define("Subject", {
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
    }
})

Subject.associate = (models) => {
    Subject.hasMany(models.Types_of_task, {as: "Types_of_task", foreignKey: "id", sourceKey: "subject_id"})
}
Subject.associate = (models) => {
    Subject.hasMany(models.Theory_topic, {as: "Theory_topic", foreignKey: "id", sourceKey: "subject_id"})
}

module.exports.Subject = Subject
