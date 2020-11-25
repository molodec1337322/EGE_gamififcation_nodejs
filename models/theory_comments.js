const Sequelize = require("sequelize")
const db = require("../config/database")
const Theory = require("./theory")
const Users = require("./users")

const Theory_comments = db.define("Theory_comments", {
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

Theory_comments.associate = (models) => {
    Theory_comments.belongsTo(models.Users, {as: "Users", foreignKey: "id", sourceKey: "user_id"})
}
Theory_comments.associate = (models) => {
    Theory_comments.belongsTo(models.Theory, {as: "Theory", foreignKey: "id", sourceKey: "theory_id"})
}

module.exports.Theory_comments = Theory_comments
