const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blogs extends Model{}

Blogs.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bloggers_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'bloggers',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'blog'
    }
  
)

module.exports = Blogs;