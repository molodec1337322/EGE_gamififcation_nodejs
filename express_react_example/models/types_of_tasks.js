const Sequelize = require("sequelize")
const db = require("../config/database")
const Tasks = require("./tasks")
const Subjects = require("./subjects")

const Types_of_tasks = db.define("Types_of_tasks", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    subject_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    task_type_name:{
        type: Sequelize.STRING,
        allowNull: true
    }
})

Types_of_tasks.associate = (models) => {
    Types_of_tasks.hasMany(models.Tasks, {as: "Tasks", foreignKey: "id", sourceKey: "type_id"})
}
Types_of_tasks.associate = (models) => {
    Types_of_tasks.belongsTo(models.Subjects, {as: "Subjects", foreignKey: "id", sourceKey: "subject_id"})
}

module.exports.Types_of_tasks = Types_of_tasks
