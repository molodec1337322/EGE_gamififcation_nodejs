const Sequelize = require("sequelize")
const db = require("../config/database")
const Users = require("./users")

const Feedback = db.define("Feedback", {
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
    text:{
        type: Sequelize.TEXT,
        allowNull: true
    }
})

Feedback.associate = (models) => {
    Feedback.belongsTo(models.Users, {as: "Users", foreignKey: "id", sourceKey: "user_id"})
}

module.exports.Feedback = Feedback
