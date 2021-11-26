const {Model, dataTypes, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

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
            type: DataTypes.STRING,
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
        hooks: {
            async beforeCreate (newBloggersData) {
                newBloggersData.password = await bcrypt.hash(newBloggersData.password, 10);
                return newBloggersData;
            },
            async beforeUpdate(updatedBloggersData) {
                updatedBloggersData.password = await bcrypt.hash(updatedBloggersData.password, 10);
                return updatedBloggersData;
            }            
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'bloggers'
    }
);

module.exports = Bloggers;