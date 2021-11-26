const {Model, dataTypes, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Bloggers extends Model{}

Bloggers.init(
    {
        //Bloggers table columns will go here
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'bloggers'
    }
);

module.exports = Bloggers;