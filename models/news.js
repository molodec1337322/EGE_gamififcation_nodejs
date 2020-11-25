const Sequelize = require("sequelize")
const db = require("../config/database")

const News = db.define("News", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    date:{
        type: Sequelize.DATE,
        allowNull: true
    },
    title:{
        type: Sequelize.STRING,
        allowNull: true
    },
    text:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    picture_uri:{
        type: Sequelize.STRING,
        allowNull: true
    }
})

module.exports.News = News
