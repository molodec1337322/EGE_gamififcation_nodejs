const Sequelize = require("sequelize")
const db = require("../config/database")
const Subjects = require("./subjects")
const Theory = require("./theory")

const Theory_topics = db.define("Theory_topics", {
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

Theory_topics.associate = (models) => {
    Theory_topics.belongsTo(models.Subjects, {as: "Subjects", foreignKey: "id", sourceKey: "subject_id"})
}
Theory_topics.associate = (models) => {
    Theory_topics.hasMany(models.Theory, {as: "Theory", foreignKey: "id", sourceKey: "topic_id"})
}

module.exports.Theory_topics = Theory_topics
