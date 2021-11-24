const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db')


// Vamos a crear un modelo

class User extends Model {}

User.init({
    username: DataTypes.STRING,
    password: {type: DataTypes.STRING, unique:false, index:true},
    correo_electronico: {type: DataTypes.STRING, unique:true, index:true},
    birthday: DataTypes.DATE,
    campo1: DataTypes.STRING,
    campo2: DataTypes.STRING,
    campo3: DataTypes.STRING

},{
    sequelize,
    modelName: "academy_usuarios"
})

module.exports = User;