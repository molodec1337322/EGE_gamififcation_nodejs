const Sequelize = require("sequelize")
const db = require("../config/database")
const Types_of_tasks = require("./types_of_tasks")
const Theory_topics = require("./theory_topics")

const Subjects = db.define("Subjects", {
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

Subjects.associate = (models) => {
    Subjects.hasMany(models.Types_of_tasks, {as: "Types_of_tasks", foreignKey: "id", sourceKey: "subject_id"})
}
Subjects.associate = (models) => {
    Subjects.hasMany(models.Theory_topics, {as: "Theory_topics", foreignKey: "id", sourceKey: "subject_id"})
}

module.exports.Subjects = Subjects
