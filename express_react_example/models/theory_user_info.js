const Sequelize = require("sequelize")
const db = require("../config/database")
const Theory = require("./theory")
const Users = require("./users")

const Theory_user_info = db.define("Theory_user_info", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    progress:{
        type: Sequelize.INTEGER,
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

Theory_user_info.associate = (models) => {
    Theory_user_info.belongsTo(models.Users, {as: "Users", foreignKey: "id", sourceKey: "user_id"})
}
Theory_user_info.associate = (models) => {
    Theory_user_info.belongsTo(models.Theory, {as: "Theory", foreignKey: "id", sourceKey: "theory_id"})
}

module.exports.Theory_user_info = Theory_user_info
