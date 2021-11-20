const { Sequelize} = require('sequelize')
const {database} = require('../config')

// Crear la conexion a de la base de datos
// Tomamos los datos del archivo config

const sequelize = new Sequelize(
    database.database,
    database.user,
    database.password,{
        host: database.host,
        dialect: "mysql"
    }
)

module.exports = sequelize

