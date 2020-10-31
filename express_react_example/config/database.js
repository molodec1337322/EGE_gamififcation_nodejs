let Sequelize = require("sequelize");
module.exports = new Sequelize("test_ege", "postgres", "admin", {
    dialect: "postgres",
    host: "localhost",
    define: {
        timestamps: false
    }
});