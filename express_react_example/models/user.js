const Sequelize = require("sequelize")
const db = require("../config/database")
const {Comments_for_task} = require("./comments_for_task")

const User = db.define("User", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    nickname:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    info: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

User.associate = (models) => {
    User.hasMany(models.Comments_for_task, {foreignKey: "id", sourceKey: "user_id"})
}

module.exports.User = User