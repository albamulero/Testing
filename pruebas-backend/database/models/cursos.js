const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db')


// Vamos a crear un modelo

class Cursos extends Model {}

Cursos.init({
    curso_title: DataTypes.STRING,
    curso_descripcion: DataTypes.STRING
},{
    sequelize,
    modelName: "curso_cursos"
})

module.exports = Cursos;