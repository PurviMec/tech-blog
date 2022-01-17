const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
        // comment_text: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // bloggers_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'bloggers',
        //         key: 'id'
        //     }
        // },
        // blog_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'blog',
        //         key: 'id'
        //     }
        // }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;
