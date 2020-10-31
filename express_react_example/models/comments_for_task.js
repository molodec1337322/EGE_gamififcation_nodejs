const Sequelize = require("sequelize")
const db = require("../config/database")
const {User} = require("./user")

const Comments_for_task = db.define("Comments_for_task", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    task_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    comment_text:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Comments_for_task.associate = (models) => {
    Comments_for_task.belongsTo(models.User, {foreignKey: "id", sourceKey: "user_id"})
}

module.exports.Comments_for_task = Comments_for_task