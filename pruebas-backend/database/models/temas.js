const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db')


// Vamos a crear un modelo

class Temas extends Model {}

Temas.init({
    id_curso: DataTypes.INTEGER(11),
    tema_orden: DataTypes.INTEGER(1),
    tema_title: DataTypes.STRING,
    tema_descripcion: DataTypes.STRING
},{
    sequelize,
    modelName: "curso_temas"
})

module.exports = Temas;