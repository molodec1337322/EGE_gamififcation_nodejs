let Sequelize = require("sequelize");
module.exports = new Sequelize("test_ege_db", "root", "admin", {
    dialect: "MySQL",
    host: "localhost",
    port: 3308,
    define: {
        timestamps: false
    }
});