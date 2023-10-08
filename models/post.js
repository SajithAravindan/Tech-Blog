//Import Dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Initialize Post model (table) by extending off Sequelize's Model class
class Post extends Model { };

// Set up fields and rules for Post model
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        content: {
            type: DataTypes.STRING(5000),
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_id: {//Foreign Key
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },       
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
)

module.exports = Post;//Export Model