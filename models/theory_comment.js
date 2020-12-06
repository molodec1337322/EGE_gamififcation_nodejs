const Sequelize = require("sequelize")
const db = require("../config/database")
const Theory = require("./theory")
const User = require("./user")

const Theory_comment = db.define("Theory_comment", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    comment_text:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    theory_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Theory_comment.associate = (models) => {
    Theory_comment.belongsTo(models.User, {as: "User", foreignKey: "id", sourceKey: "user_id"})
}
Theory_comment.associate = (models) => {
    Theory_comment.belongsTo(models.Theory, {as: "Theory", foreignKey: "id", sourceKey: "theory_id"})
}

module.exports.Theory_comment = Theory_comment
